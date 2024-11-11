import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Visag - Vizuelni stimulator govora | {t("metaContact")}</title>
      </Head>
      <main className="bg-gray-800 text-white">
        <div className="px-4 p-48 max-w-4xl m-auto">
          <h1> {t("contact")} </h1>
          <div dangerouslySetInnerHTML={{ __html: t("contactBody") }}></div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};

export default ContactPage;
