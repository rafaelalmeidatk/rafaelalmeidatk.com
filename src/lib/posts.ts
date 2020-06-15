import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'posts');

export type Post = {
  slug: string;
  title: string;
  date: number;
  content: string;
};

export const getAllPostsSlug = () => {
  return fs
    .readdirSync(postsDirectory)
    .map((filename) => filename.replace(/\.md$/, ''));
};

export const getPostBySlug = (slug: string): Post => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title,
    date: data.date,
  };
};

export const getAllPosts = () => {
  const slugs = getAllPostsSlug();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
