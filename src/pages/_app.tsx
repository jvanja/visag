import type { AppProps } from 'next/app'
import 'public/styles/global.css';
import Layout from '@/components/layout'
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from 'next-i18next.config'
import Script from 'next/script'

const Home = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LERYJCR1GM"></Script>
    <Script id="google-analytics" strategy="lazyOnload">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LERYJCR1GM');`}</Script>
  </Layout>
)

export default appWithTranslation(Home, nextI18nextConfig)

