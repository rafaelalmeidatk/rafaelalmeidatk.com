import React from 'react';
import cx from 'classnames';
import { useGlobalDelay } from './GlobalDelayContext';
import styles from './Heading.module.css';

const HEADING_ANIMATION_DURAITON = 500;

const Heading = () => {
  const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();
  const globalCssDelay = getCurrentCssDelay();
  registerAnimation(HEADING_ANIMATION_DURAITON, 100);

  return (
    <section className={styles.heading}>
      <div
        className={cx('container', styles.blockGlitch)}
        style={{
          animationDuration: `${HEADING_ANIMATION_DURAITON}ms`,
          animationDelay: globalCssDelay,
        }}
      >
        <h1 className={styles.h1}>
          Hi! I am Rafael Almeida, and I try to not{' '}
          <span className={styles.wordGlitch} data-text="break">
            break
          </span>{' '}
          the web
        </h1>
      </div>
    </section>
  );
};

export default Heading;
