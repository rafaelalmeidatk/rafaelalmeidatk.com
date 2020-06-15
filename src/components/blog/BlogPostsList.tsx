import { formatRawDate } from '../../lib/postTime';
import { Post } from '../../lib/posts';
import styles from './BlogPostsList.module.css';

type BlogPostsListItemProps = {
  slug: string;
  title: string;
  date: string;
};

const BlogPostsListItem = ({ slug, title, date }: BlogPostsListItemProps) => (
  <a className={styles.listItem} href={`/blog/${slug}`}>
    <div className={styles.listItemTitle}>{title}</div>
    <div className={styles.listItemDate}>
      {formatRawDate(date, 'MMMM d, yyyy')}
    </div>

    <style jsx>{``}</style>
  </a>
);

type BlogPostsListProps = {
  posts: Post[];
};

const BlogPostsList = ({ posts }: BlogPostsListProps) => (
  <ul className={styles.list}>
    {posts.map((post) => (
      <li key={post.slug}>
        <BlogPostsListItem
          slug={post.slug}
          title={post.title}
          date={post.date}
        />
      </li>
    ))}
  </ul>
);

export default BlogPostsList;
