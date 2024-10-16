import Image from "next/image";
import "./header.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-4 text-sm">
        <Image src="/images/logo.webp" className="Logo" alt="Logo" width="30" height="30"/>
        <a href="#" className="hover:underline">
          {t("About")}
        </a>
        <a href="#" className="hover:underline">
          {t("Contact")}
        </a>
      </div>
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
