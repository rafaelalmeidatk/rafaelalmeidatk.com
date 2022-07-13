import Document, { Html, Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-168360260-1';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new__SPACE__Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                  ga('create', '${GA_TRACKING_ID}', 'auto');
                  ga('send', 'pageview');
                `
                  .replace(/\s/g, '')
                  .replace('__SPACE__', ' '),
              }}
            />
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
