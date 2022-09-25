import React from 'react';
import { Heading } from '../components/Heading';
import { Link } from '../components/Link';
import { getAllPosts, Post } from '../lib/posts';
import { GetStaticProps } from 'next';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';
import { BlogPostsList } from '../components/BlogPostsList';
import { Layout } from '../components/Layout';

type HomeProps = {
  posts: Post[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <Header />

      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
        <section>
          <div className="text-xl leading-normal sm:text-2xl sm:leading-normal">
            Hi there,
          </div>
          <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-semibold">
            I'm{' '}
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent animate-heading bg-[length:200%]">
              Rafael Almeida
            </span>{' '}
            👋
          </h1>
          <div className="opacity-90 dark:opacity-80 leading-relaxed">
            I'm a Software Engineer building full-stack web applications with
            React, Node.js, TypeScript, and PostgreSQL. I like to hang out in
            Discord communities to help other developers, you will probably find
            me in{' '}
            <Link href="https://www.reactiflux.com/" isExternal>
              Reactiflux
            </Link>{' '}
            or the{' '}
            <Link href="https://nextjs.org/discord" isExternal>
              Next.js Discord
            </Link>
          </div>
        </section>

        <Projects />

        <section>
          <Heading>
            <Link href="/blog" variant="text">
              Blog
            </Link>
          </Heading>
          <BlogPostsList posts={posts} size="compact" />
        </section>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
