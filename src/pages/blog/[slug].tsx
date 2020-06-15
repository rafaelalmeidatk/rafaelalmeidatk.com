import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Post, getAllPosts, getPostBySlug } from '../../lib/posts';
import { markdownToHtml } from '../../lib/markdownToHtml';
import BlogWrapper from '../../components/Blog/BlogWrapper';
import BlogHeader from '../../components/Blog/BlogHeader';
import PostHeader from '../../components/Post/PostHeader';
import PostBody from '../../components/Post/PostBody';

type PostPageProps = {
  post: Post;
};

const PostPage = ({ post }: PostPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title} | Rafael Almeida</title>
      </Head>
      <BlogWrapper>
        <BlogHeader isBlogPost />

        <article>
          <PostHeader title={post.title} time={post.date} />

          <section>
            <PostBody content={post.content} />
          </section>
        </article>
      </BlogWrapper>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps<
  PostPageProps,
  { slug: string }
> = async ({ params }) => {
  const slug = params?.slug || '';
  const post = getPostBySlug(slug);

  const content = await markdownToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};
