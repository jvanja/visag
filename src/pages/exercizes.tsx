import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <main className="bg-gray-800 text-white">
      <div className="px-4 pt-20 pb-28 max-w-4xl m-auto" dangerouslySetInnerHTML={{ __html: t('exercizes') }}></div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};

export default ContactPage;
