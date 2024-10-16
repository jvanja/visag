import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'

const Home = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default appWithTranslation(Home)
