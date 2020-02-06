import React from "react";

const ProjectCard = ({ title, cover }) => (
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

export default ProjectCard;
