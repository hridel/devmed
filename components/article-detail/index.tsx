import { getArticleDetail } from "#/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import { Separator } from "#/components/ui/separator";

interface ArticleDetailProps {
  slug: string;
}

const ArticleDetail = async (props: ArticleDetailProps) => {
  const { slug } = props;
  const articleDetailResponse = await getArticleDetail(slug);

  if (!articleDetailResponse || articleDetailResponse.data.length === 0) {
    notFound();
  }

  const article = articleDetailResponse.data[0];
  const articleTranslations = article.translations[0] ?? {};

  // TODO: Remove this once we have real labels
  const demoLabels = ["technologie", "zdraví", "výzkum", "léčba"];
  const labels = demoLabels.slice(
    0,
    Math.floor(Math.random() * demoLabels.length),
  );

  const imageUrl = articleTranslations.image?.filename_download
    ? `${process.env.IMGS_BASE_URL}${articleTranslations.image.filename_download}`
    : process.env.DEFAULT_ARTICLE_IMG;

  return (
    <article className="flex flex-col gap-8 md: gap-10">
      <header>
        <ul className="flex gap-1">
          {labels.map((label) => (
            <li
              key={label}
              className="text-xs text-[#C1121E] uppercase border-r border-[#C1121E] pr-1 last:border-none last:pr-none"
            >
              {label}
            </li>
          ))}
        </ul>
        <h1 className="text-[#141414] text-xl md:text-[32px] font-semibold">
          {articleTranslations.name}
        </h1>
        <span className="text-[#5C5C5C]">
          {format(new Date(article.date_updated), "d. MMMM yyyy", {
            locale: cs,
          })}
        </span>
      </header>

      <Separator />

      <div className="w-full h-[228px] bg-gray-300 md:h-[443px] relative">
        {imageUrl && (
          <Link href={`/clanek/${articleTranslations.slug}`}>
            <Image
              src={imageUrl}
              alt={articleTranslations.name}
              fill
              className="object-cover"
            />
          </Link>
        )}
      </div>

      <p className="text-[#141414] font-semibold">
        {articleTranslations.perex}
      </p>

      <div dangerouslySetInnerHTML={{ __html: articleTranslations.content }} />
    </article>
  );
};

export default ArticleDetail;
