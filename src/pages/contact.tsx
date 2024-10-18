import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <main className="bg-gray-800 text-white">
      <div className="px-4 p-48 max-w-4xl m-auto">
        <h1> {t("contact")} </h1>
        <p dangerouslySetInnerHTML={{ __html: t('contactBody') }}></p>
      </div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};

export default ContactPage;
