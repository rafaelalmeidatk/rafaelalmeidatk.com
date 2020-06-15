import React from 'react';
import { GetStaticProps } from 'next';
import BlogHeader from '../../components/Blog/BlogHeader';
import BlogWrapper from '../../components/Blog/BlogWrapper';
import BlogPost from '../../components/Blog/BlogPost';
import { Post, getAllPosts } from '../../lib/posts';

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => (
  <>
    <BlogWrapper>
      <BlogHeader />

      <main className="container">
        <h2>Blog</h2>

        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogPost slug={post.slug} title={post.title} date={post.date} />
            </li>
          ))}
        </ul>
      </main>
    </BlogWrapper>

    <style jsx>{`
      h2 {
        font-size: 2.2rem;
        margin-bottom: 1.6rem;
      }

      ul > * + * {
        border-top: 2px solid rgba(255, 255, 255, 0.05);
      }
    `}</style>
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
