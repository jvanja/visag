import type { AppProps } from 'next/app'
import '../../public/styles/global.css';
import Layout from '../components/layout'
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config'

const Home = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(Home, nextI18nextConfig)

