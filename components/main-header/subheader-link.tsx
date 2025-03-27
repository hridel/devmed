import Link from "next/link";
import { cn } from "#/lib/utils";

interface SubheaderLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const SubheaderLink = (props: SubheaderLinkProps) => {
  const { href, label, active } = props;

  return (
    <Link
      href={href}
      className={cn(
        "text-[rgba(92, 92, 92, 1)] font-normal h-full flex items-center decoration-[4px] underline-offset-[22px] decoration-border hover:underline",
        active && "underline decoration-[#C1121E] font-semibold",
      )}
    >
      {label}
    </Link>
  );
};

export default SubheaderLink;
