import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  isBlogPost?: boolean;
};

const Header = ({ isBlogPost = false }: HeaderProps) => (
  <header className={styles.header}>
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

export default Header;
