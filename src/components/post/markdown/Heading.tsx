import React from 'react';
import { formatRawDate } from '../../../lib/postTime';
import styles from './Heading.module.css';

type HeadingProps = { title: string; time: string };

const Heading = ({ title, time }: HeadingProps) => (
  <header className={styles.heading}>
    <h1 className={styles.title}>{title}</h1>
    <time className={styles.time} dateTime={time}>
      {formatRawDate(time, 'MMMM d, yyyy')}
    </time>
  </header>
);

export default Heading;
