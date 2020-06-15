import React from 'react';
import cx from 'classnames';
import styles from './BlogHeader.module.css';

type BlogHeaderProps = {
  isBlogPost?: boolean;
};

const BlogHeader = ({ isBlogPost = false }: BlogHeaderProps) => (
  <header className={cx(styles.header, 'container')}>
    <a href="/" className={styles.name}>
      rafael almeida
    </a>
    {isBlogPost && (
      <a href="/blog" className={styles.allPosts}>
        all posts
      </a>
    )}
  </header>
);

export default BlogHeader;
