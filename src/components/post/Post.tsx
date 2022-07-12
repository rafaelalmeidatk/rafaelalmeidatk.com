import React from 'react';
import assert from 'assert';
import { MDXProvider } from '@mdx-js/react';
import { chakra, Heading } from '@chakra-ui/react';
import Seo from '../Seo';
import CodeBlock from './markdown/CodeBlock';
import Link from './markdown/Link';
import styles from './Post.module.css';
import Footer from '../Footer';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { formatPostDate } from '../../lib/postTime';

const markdownComponents = {
  a: Link,
  pre: (props: React.HTMLProps<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
};

type PostProps = {
  meta: {
    title: string;
    description: string;
    date: string;
  };
  children: React.ReactNode;
};

const Post = ({ children, meta }: PostProps) => {
  assert(meta.title, 'The post is missing a title!');
  assert(meta.description, 'The post is missing a description!');
  assert(meta.date, 'The post is missing a date!');

  return (
    <>
      <Seo title={meta.title} description={meta.description} isPost />

      <Layout>
        <Header />

        <article>
          <chakra.header mt={14} mb={8} textAlign="center">
            <Heading>{meta.title}</Heading>
            <chakra.time
              dateTime={meta.date}
              display="block"
              mt={1.5}
              fontSize="md"
              opacity={0.8}
            >
              {formatPostDate(meta.date)}
            </chakra.time>
          </chakra.header>

          <MDXProvider components={markdownComponents}>
            <section className={styles.post}>{children}</section>
          </MDXProvider>
        </article>

        <Footer />
      </Layout>
    </>
  );
};

export default Post;
