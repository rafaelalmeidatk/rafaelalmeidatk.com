import React from 'react';
import cx from 'classnames';
import ProjectCard, { PROJECT_CARD_ANIMATION_DURATION } from './ProjectCard';
import { useGlobalDelay } from './GlobalDelayContext';
import styles from './Projects.module.css';

const projects = [
  {
    id: 'twitter-fullstack-clone',
    cover: 'https://i.imgur.com/EGnz7hT.jpg',
    title: 'Twitter Fullstack Clone',
    link: 'https://github.com/rafaelalmeidatk/twitter-fullstack-clone',
  },
  {
    id: 'discord-react-clone',
    cover: 'https://i.imgur.com/nkh2lZ0.jpg',
    title: 'Discord React Clone',
    link: 'https://github.com/rafaelalmeidatk/discord-react-clone',
  },
  {
    id: 'hitbox',
    cover: 'https://i.imgur.com/EDpgUAw.jpg',
    title: 'Hitbox',
    link: 'https://github.com/rafaelalmeidatk/hitbox',
  },
  {
    id: 'summoners',
    cover: 'https://i.imgur.com/1qY32Cs.jpg',
    title: 'Summoners',
    link: 'https://github.com/rafaelalmeidatk/summoners',
  },
  {
    id: 'ideas',
    cover: 'https://i.imgur.com/NSfsfPM.jpg',
    title: 'I Need Ideas',
    link: 'https://github.com/rafaelalmeidatk/i-need-ideas',
  },
  {
    id: 'super-pete',
    cover: 'https://i.imgur.com/GUjHlHR.jpg',
    title: 'Super Pete The Pirate',
    link: 'https://github.com/rafaelalmeidatk/Super-Pete-The-Pirate',
  },
  {
    id: 'machina',
    cover: 'https://i.imgur.com/8yUeyNc.jpg',
    title: 'Machina Rising',
    link: 'https://github.com/Phantom-Ignition/LudumDare40',
  },
  {
    id: 'blaze',
    cover: 'https://i.imgur.com/CD4eR5H.jpg',
    title: 'Blaze Strike',
    link: 'https://github.com/Phantom-Ignition/MonoGameJam1',
  },
  {
    id: 'sirius',
    title: 'Sirius Firmware',
    cover:
      'https://camo.githubusercontent.com/7277a060f5710f6ab1815455e035d3e9d913514a/687474703a2f2f692e696d6775722e636f6d2f6e4370496f70732e6a7067',
    link: 'https://github.com/SIRLab/Sirius-Firmware',
  },
];

const PROJECTS_OPEN_DURATION = 400;

const Projects = () => {
  const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();
  const globalCssDelay = getCurrentCssDelay();
  registerAnimation(PROJECTS_OPEN_DURATION);

  const cardsGlobalCssDelay = getCurrentCssDelay();
  registerAnimation(PROJECT_CARD_ANIMATION_DURATION);

  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.titleWrapper}>
          <h2
            className={styles.h2}
            style={{
              animationDuration: `${PROJECTS_OPEN_DURATION}ms`,
              animationDelay: globalCssDelay,
            }}
          >
            Projects
          </h2>
        </div>

        <div className={cx(styles.columns, 'columns')}>
          {projects.map((project) => (
            <div key={project.id} className={styles.column}>
              <ProjectCard
                id={project.id}
                title={project.title}
                cover={project.cover}
                link={project.link}
                animationDelayCss={cardsGlobalCssDelay}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
