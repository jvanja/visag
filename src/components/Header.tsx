import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { usePathname } from "next/navigation";

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  function MenuIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }

  return (
    <>
      <Head>
        <title>Visag - Vizuelni stimulator govora</title>
        <meta name="description" content={t('metaDescription')} />
      </Head>
      <header className="w-full bg-gray-900 p-4 flex items-center justify-between">
        <div className="">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-primary border-0">
                <MenuIcon />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900">
              <Link href="/" prefetch={false}>
                <Image
                  src="/images/logo.webp"
                  className="Logo"
                  alt="Logo"
                  width="30"
                  height="30"
                />
                <span className="sr-only">Visag.rs</span>
              </Link>
              <div className="grid gap-2 py-6">
                <Link
                  href="/about"
                  className={`hover:text-primary ${pathname === "/about" ? "text-primary" : "text-white"}`}
                >
                  {t("about")}
                </Link>
                <Link
                  href="/jovan-jelic"
                  className={`hover:text-primary ${pathname === "/jovan-jelic" ? "text-primary" : "text-white"}`}
                >
                  {t("aboutAuthorLink")}
                </Link>
                <Link
                  href="/contact"
                  className={`hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-white"}`}
                >
                  {t("contact")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden lg:flex items-center gap-4 text-sm text-white">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                className="Logo"
                alt="Logo"
                width="30"
                height="30"
              />
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary ${pathname === "/about" ? "text-primary" : "text-white"}`}
            >
              {t("about")}
            </Link>
            <Link
              href="/jovan-jelic"
              className={`hover:text-primary ${pathname === "/jovan-jelic" ? "text-primary" : "text-white"}`}
            >
              {t("aboutAuthorLink")}
            </Link>
            <Link
              href="/contact"
              className={`hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-white"}`}
            >
              {t("contact")}
            </Link>
          </div>
        </div>
        <LanguageSwitcher />
      </header>
    </>
  );
};

export default Header;
