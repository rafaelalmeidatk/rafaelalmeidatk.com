import React from "react";

const AboutMe = () => (
  <section className="about-me container">
    <div className="box">
      <div className="box-border tl" />
      <div className="box-border tr" />
      <div className="box-border bl" />
      <div className="box-border br" />

      <div className="content">
        <div className="row">
          <span className="key">Github</span>
          <span className="value">
            <a href="https://github.com/rafaelalmeidatk">
              github.com/rafaelalmeidatk
            </a>
          </span>
        </div>

        <div className="row">
          <span className="key">Main Languages</span>
          <span className="value">JavaScript and C#</span>
        </div>

        <div className="row">
          <span className="key">Toolbelt</span>
          <span className="value">
            Node.js, React & React Native, Electron, Redux, GraphQL, Apollo,
            Express
          </span>
        </div>

        <div className="row">
          <span className="key">Favorite Games</span>
          <span className="value">MapleStory, Portal 2, FEZ, Terraria</span>
        </div>
      </div>
    </div>

    <style jsx>{`
      .about-me {
        margin-top: 3em;
        margin-bottom: 4em;
        height: 180px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .box {
        max-width: 524px;
        padding: 14px 28px;
        position: relative;
        overflow: hidden;
        opacity: 0%;
        animation: box-open 0.2s ease-out 0.8s forwards;
      }

      .content {
        animation: box-open-content 0.2s ease-out 0.8s;
      }

      .box-border {
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
        visibility: hidden;
        top: 0;
        right: 0;
        border-top-width: 2px;
        border-right-width: 2px;
      }

      .box-border.bl.bl {
        visibility: hidden;
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

      .row {
        margin: 2px 0;
      }

      .key {
        text-transform: uppercase;
        font-weight: bold;
        font-family: monospace;
        letter-spacing: 0.02em;
      }

      .value {
        margin-left: 8px;
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
          height: 162px;
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
    `}</style>
  </section>
);

export default AboutMe;
