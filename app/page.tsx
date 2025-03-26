import { Suspense } from "react";
import ArticlesList from "#/components/articles-list";

interface HomePageProps {
  searchParams: Promise<{ page: string }>;
}

export default async function HomePage(props: HomePageProps) {
  const { page = "1" } = await props.searchParams;
  const pageNumber = parseInt(page, 10);

  return (
    <main>
      <Suspense fallback="loading articles list...">
        <ArticlesList page={pageNumber} />
      </Suspense>
    </main>
  );
}
