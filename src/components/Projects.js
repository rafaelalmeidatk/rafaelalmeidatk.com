import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "twitter-fullstack-clone",
    cover:
      "https://camo.githubusercontent.com/2c5c4d500a9493da91f523cf990003d130c0eddf/68747470733a2f2f692e696d6775722e636f6d2f3672694438546b2e706e67",
    title: "Twitter Fullstack Clone",
    link: "https://github.com/rafaelalmeidatk/twitter-fullstack-clone"
  },
  {
    id: "discord-react-clone",
    cover:
      "https://camo.githubusercontent.com/f24a1f5b1b875f348a0c6c63ccb779c6feffa118/68747470733a2f2f692e696d6775722e636f6d2f305570436972342e676966",
    title: "Discord React Clone",
    link: "https://github.com/rafaelalmeidatk/discord-react-clone"
  },
  {
    id: "hitbox",
    cover:
      "https://camo.githubusercontent.com/05d2ef21aac881a5f1f0463fa1e99f3e9256396d/68747470733a2f2f692e696d6775722e636f6d2f6770556f6250462e706e67",
    title: "Hitbox",
    link: "https://github.com/rafaelalmeidatk/hitbox"
  },
  {
    id: "summoners",
    cover:
      "https://camo.githubusercontent.com/ef5c6d4457671f4b0ba1a26d1983a055e1655f91/68747470733a2f2f692e696d6775722e636f6d2f6c4937385673726c2e706e67",
    title: "Summoners",
    link: "https://github.com/rafaelalmeidatk/summoners"
  },
  {
    id: "ideas",
    cover:
      "https://camo.githubusercontent.com/8630e48321ba3793009f583bc40fbc4ee890d071/68747470733a2f2f692e696d6775722e636f6d2f6a714f626938772e706e67",
    title: "I Need Ideas",
    link: "https://github.com/rafaelalmeidatk/i-need-ideas"
  },
  {
    id: "super-pete",
    cover:
      "https://camo.githubusercontent.com/4c131c629e0a8c033d1ccaa5a158f55a8b0d5631/687474703a2f2f692e696d6775722e636f6d2f443339497243562e706e67",
    title: "Super Pete The Pirate",
    link: "https://github.com/rafaelalmeidatk/Super-Pete-The-Pirate"
  },
  {
    id: "machina",
    cover:
      "https://camo.githubusercontent.com/bee1ed3c9321a1968dc0298ab3cad7916edbbef4/68747470733a2f2f7374617469632e6a616d2e76672f7261772f3862612f332f7a2f643130302e706e67",
    title: "Machina Rising",
    link: "https://github.com/Phantom-Ignition/LudumDare40"
  },
  {
    id: "blaze",
    cover:
      "https://camo.githubusercontent.com/a353597c00768050d2fa60283934a0e65842c8c3/68747470733a2f2f696d672e697463682e7a6f6e652f6157316e4c7a45774e6a6b344f444d755a326c6d2f6f726967696e616c2f4836373137412e676966",
    title: "Blaze Strike",
    link: "https://github.com/Phantom-Ignition/MonoGameJam1"
  },
  {
    id: "sirius",
    title: "Sirius Firmware",
    cover:
      "https://camo.githubusercontent.com/7277a060f5710f6ab1815455e035d3e9d913514a/687474703a2f2f692e696d6775722e636f6d2f6e4370496f70732e6a7067",
    link: "https://github.com/SIRLab/Sirius-Firmware"
  }
];

const Projects = () => (
  <section className="projects">
    <div className="container">
      <div className="title-wrapper">
        <h2>Projects</h2>
      </div>

      <div className="columns">
        {projects.map(project => (
          <div key={project.id} className="columnn">
            <ProjectCard
              id={project.id}
              title={project.title}
              cover={project.cover}
              link={project.link}
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
        animation: glitch 0.4s steps(1, end) 1s forwards;
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
          background: #121212;
        }
      }
    `}</style>
  </section>
);

export default Projects;
