"use server";

import { ARTICLES_PER_PAGE } from "#/lib/definitions";

const contentsEndpointUrl = `${process.env.API_ITEMS_BASE_URL}contents`;

export async function getArticlesList(page: number) {
  const requestSearchParams = new URLSearchParams();

  // Get the current date in ISO format for filtering
  // const currentDate = new Date().toISOString();

  // Filtering - only articles related to web with shortcut "PL"
  requestSearchParams.append("filter[web][shortcut][_eq]", "PL");

  // Filtering - only published articles
  requestSearchParams.append("filter[status][_eq]", "published");

  // Add deep filter to only return cs-CZ translations in the response
  requestSearchParams.append("deep[translations][_filter][language][code][_eq]", "cs-CZ");

  // Filtering - public_from is either null OR less than or equal to the current date
  requestSearchParams.append("filter[public_from][_null]", "");
  //requestSearchParams.append("filter[_or][0][public_from][_lte]", currentDate);

  // Filtering - public_till is either null OR greater than or equal to the current date
  requestSearchParams.append("filter[public_till][_null]", "");
  // requestSearchParams.append("filter[_or][1][public_till][_gte]", currentDate);

  // Fields
  requestSearchParams.append("fields", "id,date_updated,translations.slug,translations.perex,translations.name,translations.language.code");

  // Sorting
  requestSearchParams.append("sort", "-public_from");

  // Pagination
  requestSearchParams.append("limit", ARTICLES_PER_PAGE.toString());
  requestSearchParams.append("offset", ((page - 1) * ARTICLES_PER_PAGE).toString());
  requestSearchParams.append("meta", "total_count");

  const url = `${contentsEndpointUrl}?${requestSearchParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
  }});

  if (!response.ok) {
    throw new Error(`Failed to fetch articles list: ${response.statusText}`);
  }

  return await response.json();
}
