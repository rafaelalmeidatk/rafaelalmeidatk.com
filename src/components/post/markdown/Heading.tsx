import React from 'react';
import { formatPostDate } from '../../../lib/postTime';
import styles from './Heading.module.css';

type HeadingProps = { title: string; time: string };

const Heading = ({ title, time }: HeadingProps) => (
  <header className={styles.heading}>
    <h1 className={styles.title}>{title}</h1>
    <time className={styles.time} dateTime={time}>
      {formatPostDate(time)}
    </time>
  </header>
);

export default Heading;
