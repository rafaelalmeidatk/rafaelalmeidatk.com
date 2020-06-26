import React from 'react';
import { GetStaticProps } from 'next';
import BlogHeader from '../../components/blog/Header';
import BlogLayout from '../../components/blog/Layout';
import BlogPageTitle from '../../components/blog/PageTitle';
import BlogContent from '../../components/blog/Content';
import BlogPostsList from '../../components/blog/BlogPostsList';
import { Post, getAllPosts } from '../../lib/posts';
import Seo from '../../components/Seo';
import Footer from '../../components/Footer';

export const config = {
  unstable_runtimeJS: false,
};

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => (
  <>
    <Seo title="Blog" description="My blog posts" />

    <BlogLayout>
      <BlogHeader />

      <BlogContent>
        <BlogPageTitle />

        <BlogPostsList posts={posts} />
      </BlogContent>

      <Footer />
    </BlogLayout>
  </>
);

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
