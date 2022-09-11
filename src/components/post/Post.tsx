import React from 'react';
import assert from 'assert';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';
import { chakra, Heading, useColorModeValue } from '@chakra-ui/react';
import { Seo } from '../Seo';
import CodeBlock from './markdown/CodeBlock';
import Link from './markdown/Link';
import { PostHeading } from './markdown/PostHeading';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { formatPostDate } from '../../lib/postTime';

const markdownComponents: MDXProviderComponents = {
  a: Link,
  pre: (props) => <div {...props} />,
  h2: (props) => <PostHeading htmlTag="h2" {...props} />,
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

export const Post = ({ children, meta }: PostProps) => {
  const lightBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');

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
            <chakra.section
              sx={{
                h2: {
                  mt: 6,
                  mb: 4,
                  fontSize: '3xl',
                  fontWeight: 'bold',
                },
                p: {
                  fontSize: 'lg',
                  lineHeight: 1.7,
                },
                code: {
                  bg: lightBg,
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  py: 1,
                  px: 1.5,
                },
                blockquote: {
                  px: 3,
                  borderLeftWidth: '4px',
                  borderLeftColor: lightBg,
                  fontStyle: 'italic',
                },
                // Lists
                ul: {
                  listStyle: 'disc',
                },
                'ol, ul': {
                  paddingLeft: 8,
                  fontSize: 'lg',
                },
                'ol li + li, ul li + li': {
                  mt: 3,
                },
                // Margins
                'p, blackquote, ul, ol, pre': {
                  mb: 5,
                },
                pre: {
                  mx: [-4, null, 0],
                },
              }}
            >
              {children}
            </chakra.section>
          </MDXProvider>
        </article>
      </Layout>
    </>
  );
};
