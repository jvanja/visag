import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer>
        {/* <!--Copyright section--> */}
        <div className="bg-gray-600 p-4 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} {t('copyright')}  | Visag.rs
        </div>
    </footer>
  );
};
