import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <main id="about-page" className="bg-gray-800 text-white">
      <div className="px-4 pt-10 pb-28 max-w-4xl m-auto">
        <div className="flex justify-center mb-12">
          <Image
            src="/images/jovan-jelic.jpg"
            priority={true}
            className="Logo"
            alt="Logo"
            width="842"
            height="595"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: t("aboutAuthor") }}></div>
      </div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};

export default AboutPage;
