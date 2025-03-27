import { ArticleListItem } from "#/lib/services";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

const FeaturedArticle = (article: ArticleListItem) => {
  const { date_updated, translations } = article;

  // TODO: Remove this once we have real labels
  const demoLabels = ["technologie", "zdraví", "výzkum", "léčba"];
  const labels = demoLabels.slice(
    0,
    Math.floor(Math.random() * demoLabels.length),
  );

  const imageUrl = translations[0].image?.filename_download
    ? `${process.env.IMGS_BASE_URL}${translations[0].image.filename_download}`
    : process.env.DEFAULT_ARTICLE_IMG;

  return (
    <article className="flex flex-col gap-3 md:gap-6 mb-8 md:mb-10">
      <h2 className="text-[#141414] text-xl">
        <Link
          href={`/clanek/${translations[0].slug}`}
          className="hover:underline"
        >
          {translations[0].name}
        </Link>
      </h2>

      <div className="w-full h-[228px] bg-gray-300 md:h-[443px] relative">
        {imageUrl && (
          <Link href={`/clanek/${translations[0].slug}`}>
            <Image
              src={imageUrl}
              alt={translations[0].name}
              fill
              className="object-cover"
            />
          </Link>
        )}
        <div className="bg-[#C1121E] px-4 py-2 rounded-l-xl text-white uppercase border border-black/10 font-semibold text-sm absolute right-0 top-10 z-50">
          Doporučujeme
        </div>
      </div>

      <div className="flex flex-col">
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
        <span className="text-[#5C5C5C]">
          {format(new Date(date_updated), "d. MMMM yyyy", { locale: cs })}
        </span>
      </div>

      <p className="text-[#5C5C5C] leading-6">{translations[0].perex}</p>
    </article>
  );
};

export default FeaturedArticle;
