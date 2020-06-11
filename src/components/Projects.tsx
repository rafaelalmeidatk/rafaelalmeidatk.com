import React from 'react';
import ProjectCard, { PROJECT_CARD_ANIMATION_DURATION } from './ProjectCard';
import { useGlobalDelay } from './GlobalDelayContext';

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
    <section className="projects">
      <div className="container">
        <div className="title-wrapper">
          <h2>Projects</h2>
        </div>

        <div className="columns">
          {projects.map((project) => (
            <div key={project.id} className="columnn">
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

      <style jsx>{`
        .projects {
          margin-top: 6rem;
          padding: 0 2rem;
        }

        h2 {
          font-size: 2.6em;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;

          opacity: 0%;
          animation: glitch ${PROJECTS_OPEN_DURATION}ms steps(1, end)
            ${globalCssDelay} forwards;
        }

        .title-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 48px;
        }

        .title-wrapper .line {
          margin: 0 30px;
          height: 1px;
          background: rgba(255, 255, 255, 0.5);
          flex: 1 1 auto;
        }

        .columns {
          width: 100%;
          flex-wrap: wrap;
        }

        .columnn {
          margin: 24px 14px;
          width: calc(50% - 28px);
        }

        @media (max-width: 890px) {
          .columnn {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .projects {
            margin-top: 0;
            padding: 0 1rem;
          }
        }

        @keyframes glitch {
          0% {
            clip-path: inset(0 0% 0 0);
            background: #fff;
            opacity: 100%;
          }

          20% {
            opacity: 0%;
          }

          40% {
            opacity: 100%;
          }

          60% {
            clip-path: inset(30% 0 0 0);
          }

          70% {
            opacity: 0%;
          }

          80% {
            opacity: 100%;
          }

          90% {
            opacity: 0%;
          }

          100% {
            opacity: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
