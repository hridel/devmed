import { Suspense } from "react";
import ArticlesList from "#/components/articles-list";
import { Separator } from "#/components/ui/separator";

interface HomePageProps {
  searchParams: Promise<{ page: string }>;
}

export const dynamic = 'auto';

export default async function HomePage(props: HomePageProps) {
  const { page = "1" } = await props.searchParams;
  const pageNumber = parseInt(page, 10);

  return (
    <main className="flex flex-col gap-8 md:gap-10">
      <header className="flex flex-col-reverse gap-4">
        <Separator />
        <h1 className="uppercase text-[#333333] font-semibold">Články</h1>
        <span className="text-xs text-[#5c5c5c]">proLékaře</span>
      </header>
      <Suspense fallback="loading articles list...">
        <ArticlesList page={pageNumber} />
      </Suspense>
    </main>
  );
}
