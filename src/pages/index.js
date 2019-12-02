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
        <h1>
          Hi! I'm <span className="highlight">Rafael Almeida</span>, and I try
          to not break the web
        </h1>
        <p>
          I am mostly working with bleeding edge technologies, learning
          something new almost everyday.
        </p>
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
      .heading {
        position: relative;
        padding: 10rem 2rem;
        color: #fff;
        background: #121212;
      }

      .heading h1 {
        font-size: 4.5em;
        font-weight: 740;
        line-height: 1em;
        letter-spacing: -0.025em;
      }

      .heading p {
        margin-top: 16px;
        font-size: 1.5em;
        font-weight: 300;
        letter-spacing: -0.06em;
      }

      .projects {
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
