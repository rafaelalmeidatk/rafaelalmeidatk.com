import React from 'react';
import { useGlobalDelay } from './GlobalDelayContext';

const HEADING_ANIMATION_DURAITON = 450;

const Content = () => (
  <>
    <h1>
      Hi! I am Rafael Almeida, and I try to not{' '}
      <span className="glitch" data-text="break">
        break
      </span>{' '}
      the web
    </h1>

    <style jsx>{`
      h1 {
        font-size: 4.5em;
        font-weight: 800;
        line-height: 1.15em;
        letter-spacing: -0.025em;
      }

      .glitch {
        position: relative;
        display: inline-block;
        animation: glitch 5s steps(1, end) 2.5s infinite;
      }

      .glitch::before,
      .glitch::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
      }

      .glitch::before {
        opacity: 0%;
        animation: glitch-top 6s steps(1, end) 2.5s infinite;
      }

      .glitch::after {
        opacity: 0%;
        animation: glitch-bottom 6s steps(1, end) 2.5s infinite;
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 2.5em;
        }
      }

      @keyframes glitch {
        0% {
          opacity: 100%;
        }
        1% {
          opacity: 0%;
        }
        2% {
          opacity: 100%;
          clip-path: inset(0 40% 0 0);
          transform: skewX(30deg);
        }
        3% {
          clip-path: inset(0 0 0 0);
          opacity: 0%;
        }
        4% {
          opacity: 100%;
          transform: skewX(0deg);
        }
        5%,
        100% {
          clip-path: inset(0 0 0 0);
        }
      }

      @keyframes glitch-top {
        0% {
          top: -6px;
          left: 10px;
          clip-path: inset(0 0 60% 0);
          opacity: 100%;
        }
        1% {
          top: -6px;
          left: 4px;
        }
        2% {
          top: -4px;
          left: -4px;
        }
        3% {
          top: -6px;
          left: 4px;
        }
        4%,
        100% {
          top: 0;
          left: 0;
          opacity: 0;
        }
      }

      @keyframes glitch-bottom {
        0% {
          right: 10px;
          clip-path: inset(70% 0 0 0);
          opacity: 100%;
        }
        1% {
          left: 4px;
          bottom: -4px;
          clip-path: inset(50% 0 0 0);
        }
        2% {
          left: 6px;
          bottom: -3px;
          clip-path: inset(70% 0 0 0);
        }
        3% {
          right: 6px;
          bottom: -3px;
        }
        4%,
        100% {
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
    `}</style>
  </>
);

const Heading = () => {
  const { getCurrentCssDelay, registerAnimation } = useGlobalDelay();
  const globalCssDelay = getCurrentCssDelay();
  registerAnimation(HEADING_ANIMATION_DURAITON);

  return (
    <section className="heading">
      <div className="container flash-animation">
        <Content />
      </div>

      <style jsx>{`
        .heading {
          position: relative;
          padding: 9rem 2rem 0;
        }

        .container {
          position: relative;
          animation: glitch ${HEADING_ANIMATION_DURAITON}ms steps(1, end)
            ${globalCssDelay};
        }

        @media (max-width: 768px) {
          .heading {
            padding: 3rem 1rem 0;
          }
        }

        @keyframes glitch {
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
      `}</style>
    </section>
  );
};

export default Heading;
