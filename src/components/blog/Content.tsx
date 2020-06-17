import React from 'react';
import styles from './Content.module.css';

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => (
  <div className={styles.content}>{children}</div>
);

export default Content;
