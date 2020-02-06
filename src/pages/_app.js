import Head from "next/head";
import "../lib/bulma.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="font/inter.css" />
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
      `}</style>
    </>
  );
}

export default MyApp;
