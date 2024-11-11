import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Visag - Vizuelni stimulator govora | {t("metaAbout")}</title>
      </Head>
      <main className="bg-gray-800 text-white">
        <div
          className="px-4 pt-20 pb-28 max-w-4xl m-auto"
          dangerouslySetInnerHTML={{ __html: t("aboutVisag") }}
        ></div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};

export default AboutPage;
