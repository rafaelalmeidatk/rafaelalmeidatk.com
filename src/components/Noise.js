import React from "react";

const Noise = () => (
  <div className="noise">
    <style jsx>{`
      .noise {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("/imgs/noise.png");
        opacity: 0.8;
        animation: 0.2s infinite noise;
      }

      @keyframes noise {
        0%,
        100% {
          background-position: 0 0;
        }
        20% {
          background-position: -50% 50%;
        }
        40% {
          background-position: 10% 17%;
        }
        60% {
          background-position: 73% 7%;
        }
        80% {
          background-position: 45% 65%;
        }
      }
    `}</style>
  </div>
);

export default Noise;
