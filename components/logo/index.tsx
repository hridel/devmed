import Link from "next/link";
import Image from "next/image";

import Logo from "#/public/images/logo.svg";

const LogoPL = () => {
  return (
    <>
      <Link href="/" className="inline-block md:hidden">
        <Image src={Logo} className="h-5 w-auto" alt="Logo proLékaře" />
      </Link>
      <Link href="/" className="hidden md:inline-block mr-4">
        <Image src={Logo} className="h-8 w-auto" alt="Logo proLékaře" />
      </Link>
    </>
  );
};

export default LogoPL;
