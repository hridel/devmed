import Link from "next/link";
import { cn } from "#/lib/utils";

interface MenuLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const MenuLink = (props: MenuLinkProps) => {
  const { href, label, active } = props;

  return (
    <Link
      href={href}
      className={cn(
        "text-[rgba(92, 92, 92, 1)] font-normal decoration-[4px] underline-offset-8 decoration-border hover:underline",
        active && "underline decoration-[#C1121E] font-semibold",
      )}
    >
      {label}
    </Link>
  );
};

export default MenuLink;
