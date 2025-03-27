import { ReactNode } from "react";
import { cn } from "#/lib/utils";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = (props: MaxWidthWrapperProps) => {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "max-w-[1100px] mx-auto px-4 lg:px-[42px] shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_10px_15px_-3px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
