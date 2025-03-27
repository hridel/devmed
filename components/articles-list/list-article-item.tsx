import { ArticleListItem } from "#/lib/services";
import { Separator } from "#/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { cs } from "date-fns/locale";

const ListArticleItem = (article: ArticleListItem) => {
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
    <div className="flex flex-col gap-8 md:gap-10">
      <Separator />
      <article className="flex flex-col gap-4">
        <ul className="flex gap-1 items-center justify-start md:justify-end">
          {labels.map((label) => (
            <li
              key={label}
              className="text-xs text-[#C1121E] uppercase border-r border-[#C1121E] pr-1 last:border-none last:pr-none"
            >
              {label}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-4">
          <div className="w-[104px] h-[70px] bg-gray-300 md:w-[136px] md:h-[91px] relative">
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
          </div>

          <div className="flex-1 flex flex-col">
            <h2 className="text-[#141414] md:text-xl">
              <Link
                href={`/clanek/${translations[0].slug}`}
                className="hover:underline"
              >
                {translations[0].name}
              </Link>
            </h2>
            <span className="hidden md:inline-block text-[#5C5C5C]">
              {format(new Date(date_updated), "d. MMMM yyyy", { locale: cs })}
            </span>
          </div>
        </div>

        <span className="inline-block md:hidden text-sm text-[#5C5C5C]">
          {format(new Date(date_updated), "d. MMMM yyyy", { locale: cs })}
        </span>
      </article>
    </div>
  );
};

export default ListArticleItem;
