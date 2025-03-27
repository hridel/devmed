"use client";

import { SubheaderItems } from "#/lib/definitions";
import SubheaderLink from "#/components/main-header/subheader-link";
import { usePathname } from "next/navigation";

const DesktopSubheader = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block h-16">
      <ul className="h-full flex flex-row items-center justify-start gap-10">
        {SubheaderItems.map((item) => {
          // TODO: Implement active state for subheader items
          const active =
            (item.href === "/" && pathname === "/") ||
            (pathname !== "/" && item.href.endsWith("lifestyle"));

          return (
            <li key={item.href} className="h-full">
              <SubheaderLink
                href={item.href}
                label={item.label}
                active={active}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopSubheader;
