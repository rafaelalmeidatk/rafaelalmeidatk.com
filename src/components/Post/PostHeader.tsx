import React from 'react';
import { format, formatISO } from 'date-fns';
import styles from './PostHeader.module.css';

type PostHeaderProps = { title: string; time: number };

const PostHeader = ({ title, time }: PostHeaderProps) => {
  const datetime = format(time, 'yyyy-MM-dd');
  const formatedTime = format(time, 'MMMM d, yyyy');

  return (
    <div className={styles.postHeader}>
      <h1 className={styles.title}>{title}</h1>
      <time className={styles.time} dateTime={datetime}>
        {formatedTime}
      </time>
    </div>
  );
};

export default PostHeader;
