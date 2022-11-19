import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import { Seo } from '../Seo';
import { PostHeading } from './markdown/PostHeading';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { Heading } from '../Heading';
import { formatPostDate } from '../../lib/postTime';
import { Link } from '../Link';
import Image from 'next/future/image';

const markdownComponents: MDXComponents = {
  a: (props) => <Link href={props.href ?? ''} {...props} />,
  h2: ({ children, ...props }) => (
    <PostHeading
      htmlTag="h2"
      className="text-3xl"
      children={children?.toString() ?? ''}
      {...props}
    />
  ),
};

type PostProps = {
  meta: {
    title: string;
    description: string;
    date: string;
    image: {
      src: string;
      attribution: string;
    };
  };
  children: React.ReactNode;
};

export const Post = ({ children, meta }: PostProps) => {
  return (
    <>
      <Seo title={meta.title} description={meta.description} isPost />

      <Layout>
        <Header />

        <article>
          <header className="mt-14 mb-8 text-center">
            <Heading as="h1">{meta.title}</Heading>
            <time
              className="block mt-1.5 text-md opacity-80"
              dateTime={meta.date}
            >
              {formatPostDate(meta.date)}
            </time>
          </header>

          {meta.image && (
            <div className="relative mb-8 h-[300px] sm:h-[350px] md:h-[500px] ml-[-1rem] w-[calc(100%+2rem)] md:ml-[-1.1rem]  md:w-[calc(100%+2.2rem)] lg:ml-[-3.5rem]  lg:w-[calc(100%+7rem)]">
              <Image
                src={meta.image.src}
                title={`Photo by ${meta.image.attribution}`}
                className="w-full h-full object-cover"
                alt=""
                sizes="(min-width: 1024px) 1024px,
                       (min-width: 768px) 768px,
                       100vw"
                fill
                priority
              />
            </div>
          )}

          <MDXProvider components={markdownComponents}>
            <section className="prose text-lg dark:prose-dark max-w-none">
              {children}
            </section>
          </MDXProvider>
        </article>
      </Layout>
    </>
  );
};
