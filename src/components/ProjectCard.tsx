import React, { useState, useEffect } from "react";

const ProjectCard = ({ id, title, cover, link }) => {
  const [showCover, setShowCover] = useState(false);
  const [animationNumber, setAnimationNumber] = useState(1);

  useEffect(() => {
    setAnimationNumber(Math.floor(Math.random() * 3) + 1);
    setTimeout(() => setShowCover(true), 1400); // defer covers loading
  }, []);

  return (
    <a className="container" href={link}>
      {cover && showCover && (
        <div
          className={`cover ${id}`}
          style={{ backgroundImage: `url(${cover})` }}
        />
      )}
      <div className={`title top top-anim-${animationNumber}`}>{title}</div>
      <div className={`title middle`} aria-hidden>
        {title}
      </div>
      <div
        className={`title bottom bottom-anim-${animationNumber}`}
        aria-hidden
      >
        {title}
      </div>

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

          opacity: 0%;
          animation: glitch 0.2s steps(1, end) 1.4s forwards;
        }

        .container:hover {
          color: #fff;
        }

        .container:hover .cover,
        .container:focus .cover {
          opacity: 0.7;
        }

        .container:hover .title,
        .container:focus .title {
          opacity: 0.8;
        }

        .cover {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border: 1px solid #1f1f1f;
          background-size: cover;
          background-position: center center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .blaze {
          background-position: bottom;
        }

        .twitter-fullstack-clone,
        .discord-react-clone {
          background-position: top center;
        }

        .title {
          position: absolute;
          text-transform: uppercase;
          font-size: 1.3em;
          letter-spacing: 0.1em;
          font-weight: 600;

          opacity: 0%;
          animation: glitch-text 0.4s steps(1, end) 1.4s forwards;
        }

        .middle {
          opacity: 100%;
          clip-path: inset(49% 0% 48% 0);
        }

        .container:hover .middle,
        .container:focus .middle {
          opacity: 0;
        }

        .top {
          clip-path: inset(0% 0% 50% 0);
        }

        .top-anim-1 {
          animation: glitch-text-top-1 0.4s steps(1, end) 1.4s forwards;
        }

        .top-anim-2 {
          animation: glitch-text-top-2 0.4s steps(1, end) 1.4s forwards;
        }

        .top-anim-3 {
          animation: glitch-text-top-3 0.4s steps(1, end) 1.4s forwards;
        }

        .container:hover .top,
        .container:focus .top {
          transform: translateX(2px);
        }

        .bottom {
          clip-path: inset(50% 0 0 0);
          animation: glitch-text-bottom 0.4s steps(1, end) 1.4s forwards;
        }

        .bottom-anim-1 {
          animation: glitch-text-bottom-1 0.4s steps(1, end) 1.4s forwards;
        }

        .bottom-anim-2 {
          animation: glitch-text-bottom-2 0.4s steps(1, end) 1.4s forwards;
        }

        .bottom-anim-3 {
          animation: glitch-text-bottom-3 0.4s steps(1, end) 1.4s forwards;
        }

        .container:hover .bottom,
        .container:focus .bottom {
          transform: translateX(-2px);
        }

        @keyframes glitch {
          0% {
            opacity: 0%;
          }

          40% {
            opacity: 100%;
          }

          80% {
            opacity: 0%;
          }

          100% {
            opacity: 100%;
          }
        }

        @keyframes glitch-text-top-1 {
          0% {
            opacity: 100%;
            transform: translateX(6px);
          }

          40% {
            transform: translateX(-6px);
          }

          80% {
            transform: translate(2px 3px);
          }

          100% {
            transform: translate(0 0);
            opacity: 100%;
          }
        }

        @keyframes glitch-text-top-2 {
          0% {
            opacity: 100%;
            transform: translateX(1px);
          }

          40% {
            transform: translateX(-8px);
          }

          80% {
            transform: translate(1px 6px);
          }

          100% {
            transform: translate(0 0);
            opacity: 100%;
          }
        }

        @keyframes glitch-text-top-3 {
          0% {
            opacity: 100%;
            transform: translateX(4px);
          }

          40% {
            transform: translateX(-2px);
          }

          80% {
            transform: translate(5px 1px);
          }

          100% {
            transform: translate(0 0);
            opacity: 100%;
          }
        }

        @keyframes glitch-text-bottom-1 {
          0% {
            opacity: 100%;
            transform: translateX(-6px);
          }

          40% {
            transform: translateX(4px);
          }

          80% {
            transform: translate(2px 1px);
          }

          100% {
            transform: translate(0 0);
            opacity: 100%;
          }
        }

        @keyframes glitch-text-bottom-2 {
          0% {
            opacity: 100%;
            transform: translateX(-4px);
          }

          40% {
            transform: translateX(8px);
          }

          80% {
            transform: translate(4px -3px);
          }

          100% {
            transform: translate(0 0);
            opacity: 100%;
          }
        }

        @keyframes glitch-text-bottom-3 {
          0% {
            opacity: 100%;
            transform: translateX(-2px);
          }

          40% {
            transform: translateX(2px);
          }

          80% {
            transform: translate(3px -1px);
          }

          100% {
            transform: translate(0 0);
            opacity: 100%;
          }
        }
      `}</style>
    </a>
  );
};

export default ProjectCard;
