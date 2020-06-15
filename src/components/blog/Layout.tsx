import React from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
