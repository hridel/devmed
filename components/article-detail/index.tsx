import { getArticleDetail } from "#/lib/services";

interface ArticleDetailProps {
  slug: string;
}

const ArticleDetail = async (props: ArticleDetailProps) => {
  const { slug } = props;
  const articles = await getArticleDetail(slug);

  return (
    <>
      <h1>Article Detail</h1>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
    </>
  );
};

export default ArticleDetail;
