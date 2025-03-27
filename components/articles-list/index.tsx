import { getArticlesList } from "#/lib/services";
import FeaturedArticle from "#/components/articles-list/featured-article";
import ListArticleItem from "#/components/articles-list/list-article-item";
import ListPagination from "#/components/articles-list/list-pagination";
import { ARTICLES_PER_PAGE } from "#/lib/definitions";
import { Alert, AlertDescription, AlertTitle } from "#/components/ui/alert";
import { Info } from "lucide-react";

interface ArticlesListProps {
  page: number;
}

const ArticlesList = async (props: ArticlesListProps) => {
  const { page } = props;
  const articlesListResponse = await getArticlesList(page);

  const featuredArticle = articlesListResponse.data.length
    ? articlesListResponse.data[0]
    : null;
  const articles = articlesListResponse.data.slice(1);

  return (
    <>
      {!featuredArticle && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Články nejsou k dispozici</AlertTitle>
          <AlertDescription>
            Je nám líto, ale v tuto chvíli nemáme více článků k dispozici.
          </AlertDescription>
        </Alert>
      )}
      {featuredArticle && (
        <FeaturedArticle
          id={featuredArticle?.id}
          date_updated={featuredArticle?.date_updated}
          translations={featuredArticle?.translations}
        />
      )}
      {articles.map((article) => (
        <ListArticleItem
          key={article.id}
          id={article.id}
          date_updated={article.date_updated}
          translations={article.translations}
        />
      ))}
      <ListPagination
        totalItems={articlesListResponse.meta.total_count ?? 0}
        itemsPerPage={ARTICLES_PER_PAGE}
        currentPage={page}
      />
    </>
  );
};

export default ArticlesList;
