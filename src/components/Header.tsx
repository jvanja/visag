import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { usePathname } from 'next/navigation'

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname()

  return (
    <>
      <Head>
        <title>Visag - Vizuelni stimulator govora</title>
      </Head>
      <header className="w-full bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              className="Logo"
              alt="Logo"
              width="30"
              height="30"
            />
          </Link>
          <Link href="/about" 
            className={`hover:text-primary ${pathname === '/about' ? 'text-primary' : 'text-white'}`}>
            {t("about")}
          </Link>
          <Link href="/jovan-jelic"
            className={`hover:text-primary ${pathname === '/jovan-jelic' ? 'text-primary' : 'text-white'}`}>
            {t("aboutAuthorLink")}
          </Link>
          <Link href="/contact" 
            className={`hover:text-primary ${pathname === '/contact' ? 'text-primary' : 'text-white'}`}>
            {t("contact")}
          </Link>
        </div>
        <LanguageSwitcher />
      </header>
    </>
  );
};

export default Header;
