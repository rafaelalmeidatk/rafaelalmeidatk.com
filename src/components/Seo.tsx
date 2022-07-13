import Head from 'next/head';
import { useRouter } from 'next/router';

type SeoProps = {
  title?: string;
  description: string;
  isPost?: boolean;
};

export const Seo = ({ title, description, isPost = false }: SeoProps) => {
  const router = useRouter();

  return (
    <Head>
      {title ? (
        <title key="title">{title} | Rafael Almeida</title>
      ) : (
        <title key="title">Rafael Almeida</title>
      )}
      <meta key="meta-description" name="description" content={description} />
      {isPost && (
        <meta key="meta-author" name="author" content="Rafael Almeida" />
      )}

      <meta
        key="meta-og:site_name"
        property="og:site_name"
        content="Rafael Almeida"
      />
      <meta key="meta-og:locale" property="og:locale" content="en_US" />
      <meta
        key="meta-og:type"
        property="og:type"
        content={isPost ? 'article' : 'website'}
      />
      {title && (
        <meta key="meta-og:title" property="og:title" content={title} />
      )}
      <meta
        key="meta-og:description"
        property="og:description"
        content={description}
      />
      <meta
        key="meta-og:url"
        property="og:url"
        content={`https://rafaelalmeidatk.com${router.pathname}`}
      />

      <meta key="meta-twitter:card" name="twitter:card" content="summary" />
      <meta
        key="meta-twitter:site"
        name="twitter:site"
        content="@rafaelalmeidatk"
      />
      <meta
        key="meta-twitter:creator"
        name="twitter:creator"
        content="@rafaelalmeidatk"
      />
      <meta key="meta-twitter:title" name="twitter:title" content={title} />
      <meta
        key="meta-twitter:description"
        name="twitter:description"
        content={description}
      />
    </Head>
  );
};
