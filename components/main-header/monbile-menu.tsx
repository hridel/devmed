"use client";

import { MainMenuItems } from "#/lib/definitions";
import MenuLink from "#/components/main-header/menu-link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "#/components/ui/button";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="inline-block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="border">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-2">
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Mobilní navigace</SheetDescription>
            </VisuallyHidden>
          </SheetHeader>
          <nav>
            <ul className="flex flex-col items-start gap-4">
              {MainMenuItems.map((item) => {
                const active = item.href === pathname;
                return (
                  <li key={item.href}>
                    <MenuLink
                      href={item.href}
                      label={item.label}
                      active={active}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
