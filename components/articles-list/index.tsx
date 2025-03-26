import { getArticlesList } from "#/lib/services";

interface ArticlesListProps {
  page: number;
}

const ArticlesList = async (props: ArticlesListProps) => {
  const { page } = props;
  const articles = await getArticlesList(page);

  return (
    <>
      <h1>Articles List</h1>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
    </>
  );
};

export default ArticlesList;
