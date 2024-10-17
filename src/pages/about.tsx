import Link from 'next/link'
// import type {
//   GetServerSideProps,
//   InferGetServerSidePropsType,
// } from 'next'

// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// const AboutPage = ( _props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const AboutPage = ( ) => {
  // const { t } = useTranslation()

  return (
    <>
      <main>
        <Link href="/">
          <button type="button">
            Home
          </button>
        </Link>
      </main>
    </>
  )
}

export default AboutPage
