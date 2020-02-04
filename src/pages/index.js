import React from "react";
import Head from "next/head";
import Noise from "../components/Noise";

// This file will be a mess until I figure out what I want to do :P

const ProjectCard = ({ title }) => {
  return (
    <div className="container">
      <div className="image" />

      <div className="title">Twitter Fullstack Clone</div>

      <style jsx>{`
        .image {
          border: 1px solid #1f1f1f;
          width: 100%;
          height: 94px;
        }

        .title {
          margin-top: 12px;
          font-size: 1.4em;
          font-weight: 6 00;
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
        <div className="flash-animation">
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
      </div>
    </section>

    <section className="about-me">
      <div className="container">
        <div className="box">
          <div className="box-border tl" />
          <div className="box-border tr" />
          <div className="box-border bl" />
          <div className="box-border br" />
          <div>
            <span className="key">github</span>
            <span className="value">
              <a href="https://github.com/rafaelalmeidatk">
                github.com/rafaelalmeidatk
              </a>
            </span>
          </div>
          <div>
            <span className="key">main languages</span>
            <span className="value">JavaScript and C#</span>
          </div>
          <div>
            <span className="key">toolbelt</span>
            <span className="value">
              Node.js, React & React Native, Electron, Redux, GraphQL, Apollo,
              Express
            </span>
          </div>
        </div>

        <div className="box">
          <div className="box-border tl" />
          <div className="box-border tr" />
          <div className="box-border bl" />
          <div className="box-border br" />
          <div>
            <span className="key">github</span>
            <span className="value">
              <a href="https://github.com/rafaelalmeidatk">
                github.com/rafaelalmeidatk
              </a>
            </span>
          </div>
          <div>
            <span className="key">main languages</span>
            <span className="value">JavaScript and C#</span>
          </div>
          <div>
            <span className="key">toolbelt</span>
            <span className="value">
              Node.js, React & React Native, Electron, Redux, GraphQL, Apollo,
              Express
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="projects">
      <div className="container">
        <h2>My projects</h2>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="columns">
          <div className="column">
            <ProjectCard />
          </div>
          <div className="column">Second column</div>
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

      .flash-animation {
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

      .about-me .box {
        max-width: 500px;
        padding: 14px 18px;
        position: relative;
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

      .about-me .container {
        display: flex;
        justify-content: space-around;
      }

      .projects {
        background: #121212;
        margin-top: 46px;
      }

      h2 {
        font-size: 2em;
        font-weight: 500;
        color: #1f1f1f;
      }
    `}</style>
  </div>
);

export default Home;
