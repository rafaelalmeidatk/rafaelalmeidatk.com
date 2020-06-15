import React from 'react';
import cx from 'classnames';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  id: string;
  title: string;
  cover: string;
  link: string;
  animationDelayCss: string;
};

export const PROJECT_CARD_ANIMATION_DURATION = 200;

const ProjectCard = ({
  id,
  title,
  cover,
  link,
  animationDelayCss,
}: ProjectCardProps) => {
  const animationNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <a
      href={link}
      className={styles.wrapper}
      style={{
        animationDuration: `${PROJECT_CARD_ANIMATION_DURATION}ms`,
        animationDelay: animationDelayCss,
      }}
    >
      {cover && (
        <div
          className={cx(styles.cover, styles[id])}
          style={{ backgroundImage: `url(${cover})` }}
        />
      )}

      <div
        className={cx(
          styles.title,
          styles.top,
          styles[`top-anim-${animationNumber}`]
        )}
        style={{ animationDelay: animationDelayCss }}
      >
        {title}
      </div>
      <div className={cx(styles.title, styles.middle)} aria-hidden>
        {title}
      </div>
      <div
        className={cx(
          styles.title,
          styles.bottom,
          styles[`bottom-anim-${animationNumber}`]
        )}
        style={{ animationDelay: animationDelayCss }}
        aria-hidden
      >
        {title}
      </div>
    </a>
  );
};

export default ProjectCard;
