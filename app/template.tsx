import { ReactNode } from "react";

interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate = (props: PageTemplateProps) => {
  const { children } = props;

  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-10">
      <div className="md:flex-1">{children}</div>
      <aside className="w-full md:w-[312px] border-t-[6px] border-t-[#E29298]">
        <div className="mt-1.5 flex flex-col gap-1.5">
          <h2 className="text-xl text-[#CD414B] font-medium tracking-[0.03em]">
            POPULÁRNÍ ČLÁNKY
          </h2>
          <small>TODO</small>
        </div>
      </aside>
    </div>
  );
};

export default PageTemplate;
