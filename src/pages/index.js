import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <section className="heading">
      <div className="container">
        <h1>Hi</h1>
      </div>
    </section>

    <section className="projects">
      <div className="container">
        <h2>My projects</h2>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="columns"></div>
      </div>
    </section>

    <style jsx>{`
      .heading {
        padding: 10rem 2rem;
        color: #fff;
        background: #1f1f1f;
      }

      h1 {
        font-size: 4.5em;
        font-weight: 740;
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
