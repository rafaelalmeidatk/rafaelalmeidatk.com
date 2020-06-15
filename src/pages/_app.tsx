import Head from 'next/head';
import { AppProps } from 'next/app';
import '../lib/bulma.scss';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rafael Almeida</title>
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
        <meta
          name="description"
          content="Software Developer, learning how to break stuff in different ways"
        ></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
