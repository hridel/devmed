import { Suspense } from "react";

import ArticleDetail from "#/components/article-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params;

  return (
    <main>
      <Suspense fallback="loading article detail...">
        <ArticleDetail slug={slug} />
      </Suspense>
    </main>
  );
}
