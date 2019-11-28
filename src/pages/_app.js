import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="font/inter.css" />
      </Head>

      <Component {...pageProps} />

      <style jsx>{`
        :global(body) {
          font-family: Inter, Helvetica, sans-serif;
        }
      `}</style>
    </>
  );
}

export default MyApp;
