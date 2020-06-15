import styles from './PageTitle.module.css';

const PageTitle = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title} data-text="Blog posts">
      Blog posts
    </h2>
  </div>
);

export default PageTitle;
