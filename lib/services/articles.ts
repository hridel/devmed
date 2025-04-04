"use server";

import { ARTICLES_PER_PAGE } from "#/lib/definitions";
import { notFound } from "next/navigation";

const contentsEndpointUrl = `${process.env.API_ITEMS_BASE_URL}contents`;

export interface ArticleListItemTranslations {
  slug: string;
  perex: string;
  name: string;
  language: {
    code: string;
  };
  image: {
    filename_download: string;
    width: number;
    height: number;
  } | null;
}

export interface ArticleDetailTranslations extends ArticleListItemTranslations {
  content: string;
}

export interface ArticleListItem {
  id: string;
  date_updated: string;
  translations: ArticleListItemTranslations[];
}

export interface ArticlesListResponse {
  meta: {
    total_count: number;
  };
  data: ArticleListItem[];
}

export interface ArticleDetailResponse {
  data: {
    id: string;
    date_updated: string;
    translations: ArticleDetailTranslations[];
  }[];
}

export async function getArticlesList(
  page: number,
): Promise<ArticlesListResponse> {
  const requestSearchParams = new URLSearchParams();

  // Get the current date in ISO format for filtering
  // const currentDate = new Date().toISOString();

  // Filtering - only articles related to web with shortcut "PL"
  requestSearchParams.append("filter[web][shortcut][_eq]", "PL");

  // Filtering - only published articles
  requestSearchParams.append("filter[status][_eq]", "published");

  // Add deep filter to only return cs-CZ translations in the response
  requestSearchParams.append(
    "deep[translations][_filter][language][code][_eq]",
    "cs-CZ",
  );

  // Filtering - public_from is either null OR less than or equal to the current date
  requestSearchParams.append("filter[public_from][_null]", "");
  //requestSearchParams.append("filter[_or][0][public_from][_lte]", currentDate);

  // Filtering - public_till is either null OR greater than or equal to the current date
  requestSearchParams.append("filter[public_till][_null]", "");
  // requestSearchParams.append("filter[_or][1][public_till][_gte]", currentDate);

  // Fields
  requestSearchParams.append(
    "fields",
    "id,date_updated,translations.slug,translations.perex,translations.name,translations.image.width,translations.image.height,translations.image.filename_download,translations.language.code",
  );

  // Sorting
  requestSearchParams.append("sort", "-public_from");

  // Pagination
  requestSearchParams.append("limit", ARTICLES_PER_PAGE.toString());
  requestSearchParams.append(
    "offset",
    ((page - 1) * ARTICLES_PER_PAGE).toString(),
  );
  requestSearchParams.append("meta", "total_count");

  const url = `${contentsEndpointUrl}?${requestSearchParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch articles list: ${response.statusText}`);
  }

  return await response.json();
}

export async function getArticleDetail(
  slug: string,
): Promise<ArticleDetailResponse> {
  const requestSearchParams = new URLSearchParams();

  // Filtering - only published articles
  requestSearchParams.append("filter[status][_eq]", "published");

  // Filter by translations.slug
  requestSearchParams.append("filter[translations][slug][_eq]", slug);

  // Add deep filter to only return cs-CZ translations in the response
  requestSearchParams.append(
    "deep[translations][_filter][language][code][_eq]",
    "cs-CZ",
  );

  // Fields
  requestSearchParams.append(
    "fields",
    "id,date_updated,translations.slug,translations.perex,translations.name,translations.image.width,translations.image.height,translations.image.filename_download,translations.language.code,translations.content",
  );

  // Limit to 1 result since we're looking for a specific article
  requestSearchParams.append("limit", "1");

  const url = `${contentsEndpointUrl}?${requestSearchParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok && response.status === 404) {
    return notFound();
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch article detail: ${response.statusText}`);
  }

  const data = await response.json();

  // Return the first article or notFound if no articles match the slug
  if (data.data.length === 0) {
    return notFound();
  }

  return data;
}
