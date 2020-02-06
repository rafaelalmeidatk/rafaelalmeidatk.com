import React from "react";
import Head from "next/head";
import Typist from "react-typist";
import Noise from "../components/Noise";

// This file will be a mess until I figure out what I want to do :P

const projects = [
  {
    name: "twitter-fullstack-clone",
    cover:
      "https://camo.githubusercontent.com/2c5c4d500a9493da91f523cf990003d130c0eddf/68747470733a2f2f692e696d6775722e636f6d2f3672694438546b2e706e67",
    title: "Twitter Fullstack Clone"
  },
  {
    name: "discord-react-clone",
    cover:
      "https://camo.githubusercontent.com/f24a1f5b1b875f348a0c6c63ccb779c6feffa118/68747470733a2f2f692e696d6775722e636f6d2f305570436972342e676966",
    title: "Discord React Clone"
  },
  {
    name: "hitbox",
    cover:
      "https://camo.githubusercontent.com/05d2ef21aac881a5f1f0463fa1e99f3e9256396d/68747470733a2f2f692e696d6775722e636f6d2f6770556f6250462e706e67",
    title: "Hitbox"
  },
  {
    name: "summoners",
    cover:
      "https://camo.githubusercontent.com/ef5c6d4457671f4b0ba1a26d1983a055e1655f91/68747470733a2f2f692e696d6775722e636f6d2f6c4937385673726c2e706e67",
    title: "Summoners"
  },
  {
    name: "super-pete",
    cover:
      "https://camo.githubusercontent.com/4c131c629e0a8c033d1ccaa5a158f55a8b0d5631/687474703a2f2f692e696d6775722e636f6d2f443339497243562e706e67",
    title: "Super Pete The Pirate"
  },
  {
    name: "machina",
    cover:
      "https://camo.githubusercontent.com/bee1ed3c9321a1968dc0298ab3cad7916edbbef4/68747470733a2f2f7374617469632e6a616d2e76672f7261772f3862612f332f7a2f643130302e706e67",
    title: "Machina Rising"
  },
  {
    name: "blaze",
    cover:
      "https://camo.githubusercontent.com/a353597c00768050d2fa60283934a0e65842c8c3/68747470733a2f2f696d672e697463682e7a6f6e652f6157316e4c7a45774e6a6b344f444d755a326c6d2f6f726967696e616c2f4836373137412e676966",
    title: "Blaze Strike"
  },
  {
    name: "winter",
    cover:
      "https://camo.githubusercontent.com/3c88f09dcbc2fa2e5412549b168da849373ab114/687474703a2f2f692e696d6775722e636f6d2f78334678786a752e706e67",
    title: "Winter Defense"
  },
  {
    name: "planet",
    cover:
      "https://camo.githubusercontent.com/52501279bb183dc2b4cd1d6a73e981b270340932/68747470733a2f2f7374617469632e6a616d2e76672f7261772f3938652f332f7a2f323262612e706e67",
    title: "Tiny Planet Defense"
  }
];

const ProjectCard = ({ title, cover }) => {
  return (
    <div className="container">
      <div className="cover" />
      <div className="square" />
      <div className="title">{title}</div>

      <style jsx>{`
        .container {
          position: relative;
          padding: 40px 20px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          text-align: center;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .cover {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border: 1px solid #1f1f1f;
          background-image: url("${cover}");
          background-size: cover;
          background-position: center center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .container:hover .cover {
          opacity: 0.7;
        }

        .container:hover .title {
          opacity: 0.8;
        }

        .square {
          position: absolute;
          transform: rotate(45deg);
          opacity: 0;
          width: 150px;
          height: 150px;
          border: 1px solid #fff;
          transition: all 0.2s ease;
        }

        .container:hover .square {
          width: 350px;
          height: 350px;
          opacity: 0.7;
        }

        .title {
          position: relative;
          text-transform: uppercase;
          font-size: 1.3em;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <section className="heading">
      <Noise />
      <div className="container">
        <div className="hidden">
          <h1>
            Hi! I am <span className="highlight">Rafael Almeida</span>, and I
            try to not break the web
          </h1>

          <p>
            I am mostly working with bleeding edge technologies,{" "}
            <a
              href="https://github.com/rafaelalmeidatk/TIL"
              rel="noopener noreferrer"
              target="_blank"
            >
              learning something new almost everyday
            </a>
            .
          </p>
        </div>
        <div className="flash-animation">
          <Typist
            startDelay={700}
            stdTypingDelay={5}
            avgTypingDelay={5}
            cursor={{ show: false }}
          >
            <h1>
              Hi! I am <span className="highlight">Rafael Almeida</span>, and I
              try to not break the web
            </h1>

            <p>
              I am mostly working with bleeding edge technologies,{" "}
              <a
                href="https://github.com/rafaelalmeidatk/TIL"
                rel="noopener noreferrer"
                target="_blank"
              >
                learning something new almost everyday
              </a>
              .
            </p>
          </Typist>
        </div>
      </div>
    </section>

    <section className="about-me container">
      <div className="box">
        <div className="box-border tl" />
        <div className="box-border tr" />
        <div className="box-border bl" />
        <div className="box-border br" />

        <div className="content">
          <div>
            <span className="key">Github</span>
            <span className="value">
              <a href="https://github.com/rafaelalmeidatk">
                github.com/rafaelalmeidatk
              </a>
            </span>
          </div>

          <div>
            <span className="key">Main Languages</span>
            <span className="value">JavaScript and C#</span>
          </div>

          <div>
            <span className="key">Toolbelt</span>
            <span className="value">
              Node.js, React & React Native, Electron, Redux, GraphQL, Apollo,
              Express
            </span>
          </div>

          <div>
            <span className="key">Favorite Games</span>
            <span className="value">MapleStory, Portal 2, FEZ, Terraria</span>
          </div>
        </div>
      </div>
    </section>

    <section className="projects">
      <div className="container">
        <div className="title-wrapper">
          <div className="line" />
          <h2>Projects</h2>
          <div className="line" />
        </div>

        <div className="columns">
          {projects.map(project => (
            <div className="columnn" key={project.name}>
              <ProjectCard title={project.title} cover={project.cover} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <style jsx>{`
      :global(html, body) {
        background: #121212;
        color: #fff;
      }

      a {
        color: #fff;
        text-decoration: underline;
      }

      .heading {
        position: relative;
        padding: 10rem 2rem 4rem;
        background: #121212;
      }

      .heading h1 {
        font-size: 4.5em;
        font-weight: 740;
        line-height: 1.15em;
        letter-spacing: -0.025em;
      }

      .heading p {
        margin-top: 16px;
        font-size: 1.5em;
        font-weight: 300;
        letter-spacing: -0.06em;
      }

      .hidden {
        visibility: hidden;
        opacity: 0;
      }

      .heading .container {
        position: relative;
      }

      .flash-animation {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: heading-flash 0.7s steps(1, end);
      }

      @keyframes heading-flash {
        0% {
          clip-path: inset(0 70% 0 0);
          background: #fff;
          opacity: 100%;
        }

        10% {
          opacity: 0%;
        }

        15% {
          opacity: 100%;
        }

        20% {
          opacity: 0%;
        }

        25% {
          opacity: 100%;
        }

        30% {
          opacity: 0%;
        }

        45% {
          opacity: 100%;
        }

        50% {
          clip-path: inset(0 0% 0 0);
        }

        55% {
          clip-path: inset(0 40% 0 0);
        }

        65% {
          opacity: 0%;
        }

        70% {
          opacity: 100%;
        }

        75% {
          clip-path: inset(0 0% 0 0);
        }

        80% {
          opacity: 0%;
        }

        85% {
          opacity: 100%;
        }

        100% {
          background: #121212;
        }
      }

      .about-me {
        margin-top: 3em;
        margin-bottom: 4em;
      }

      .about-me .box {
        max-width: 500px;
        padding: 14px 18px;
        position: relative;
        overflow: hidden;
        opacity: 0%;
        animation: box-open 0.5s ease-out 0.8s forwards;
      }

      .about-me .box .content {
        animation: box-open-content 0.5s ease-out 0.8s;
      }

      @keyframes box-open {
        0% {
          opacity: 0%;
          height: 0;
          background: #fff;
        }

        30% {
          opacity: 100%;
          background: #fff;
        }

        100% {
          opacity: 100%;
          height: 157px;
        }
      }

      @keyframes box-open-content {
        0% {
          transform: translateY(-50%);
        }

        100% {
          transform: translateY(0%);
        }
      }

      .about-me .box-border {
        position: absolute;
        width: 10px;
        height: 10px;
        border: 0 solid #fff;
      }

      .box-border.tl.tl {
        top: 0;
        left: 0;
        border-top-width: 2px;
        border-left-width: 2px;
      }
      .box-border.tr.tr {
        top: 0;
        right: 0;
        border-top-width: 2px;
        border-right-width: 2px;
      }
      .box-border.bl.bl {
        bottom: 0;
        left: 0;
        border-bottom-width: 2px;
        border-left-width: 2px;
      }

      .box-border.br.br {
        bottom: 0;
        right: 0;
        border-bottom-width: 2px;
        border-right-width: 2px;
      }

      .about-me .key {
        text-transform: uppercase;
        font-weight: bold;
        font-family: monospace;
      }

      .about-me .value {
        margin-left: 6px;
      }

      .about-me {
        height: 180px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .projects {
        margin-top: 96px;
      }

      .projects h2 {
        font-size: 2.6em;
        font-weight: 700;
        letter-spacing: 0.09em;
        text-transform: uppercase;
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

      .projects .columns {
        flex-wrap: wrap;
      }

      .projects .columnn {
        margin: 24px 14px;
        width: calc(50% - 28px);
      }
    `}</style>
  </div>
);

export default Home;
