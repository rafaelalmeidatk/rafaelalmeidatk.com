import React from 'react';
import { formatRawDate } from '../../lib/postTime';
import styles from './PostHeader.module.css';

type PostHeaderProps = { title: string; time: string };

const PostHeader = ({ title, time }: PostHeaderProps) => (
  <div className={styles.postHeader}>
    <h1 className={styles.title}>{title}</h1>
    <time className={styles.time} dateTime={time}>
      {formatRawDate(time, 'MMMM d, yyyy')}
    </time>
  </div>
);

export default PostHeader;
