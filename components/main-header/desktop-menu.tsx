"use client";

import { MainMenuItems } from "#/lib/definitions";
import MenuLink from "#/components/main-header/menu-link";
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:inline-block">
      <ul className="flex flex-row items-center gap-4 lg:gap-8">
        {MainMenuItems.map((item) => {
          const active =
            item.href === pathname ||
            (item.href === "/" && pathname.startsWith("/clanek/"));

          return (
            <li key={item.href}>
              <MenuLink href={item.href} label={item.label} active={active} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
