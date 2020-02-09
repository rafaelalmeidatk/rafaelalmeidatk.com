import Head from "next/head";
import "../lib/bulma.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rafael Almeida</title>
        <link rel="stylesheet" href="font/inter.css" />
        <meta charSet="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
        html,
        body {
          background: #121212;
          color: #fff;
          font-family: Inter, Helvetica, sans-serif !important;
        }

        a {
          color: #fff;
          text-decoration: underline;
        }

        a:hover {
          color: #9e9e9e;
        }
      `}</style>
    </>
  );
}

export default MyApp;
