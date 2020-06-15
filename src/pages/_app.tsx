import Head from 'next/head';
import { AppProps } from 'next/app';
import Seo from '../components/Seo';
import '../lib/bulma.scss';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <Seo description="Software Developer, learning how to break stuff in different ways" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
