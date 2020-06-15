import React from 'react';
import styles from './BlogWrapper.module.css';

type BlogWraperProps = {
  children: React.ReactNode;
};

const BlogWrapper = ({ children }: BlogWraperProps) => (
  <div className={styles.wrapper}>{children}</div>
);

export default BlogWrapper;
