import Logo from "#/components/logo";
import DesktopMenu from "#/components/main-header/desktop-menu";
import { Separator } from "#/components/ui/separator";
import DesktopSubheader from "#/components/main-header/desktop-subheader";
import MobileSubheader from "#/components/main-header/mobile-subheader";
import MobileMenu from "#/components/main-header/monbile-menu";

const MainHeader = () => {
  return (
    <header className="flex flex-col mb-8 md:mb-10">
      <div className="py-2 min-h-14 md:pt-10 md:pb-6 flex items-center justify-between">
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </div>
      <Separator />
      <DesktopSubheader />
      <MobileSubheader />
      <Separator />
    </header>
  );
};

export default MainHeader;
