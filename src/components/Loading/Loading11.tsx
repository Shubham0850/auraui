import React from "react";
import clsx from "clsx";

const Loading11 = ({
  size = 80,
  color = "black",
  speed = "1.75s",
  stroke = 5,
  bgOpacity = 0.1,
}) => {
  return (
    <div
      className={clsx("loading11-container")}
      style={
        {
          "--uib-size": `${size}px`,
          "--uib-color": color,
          "--uib-speed": speed,
          "--uib-stroke": `${stroke}px`,
          "--uib-bg-opacity": bgOpacity,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        .loading11-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--uib-stroke);
          width: var(--uib-size);
          border-radius: calc(var(--uib-stroke) / 2);
          overflow: hidden;
          transform: translate3d(0, 0, 0);
        }

        .loading11-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--uib-color);
          opacity: var(--uib-bg-opacity);
          transition: background-color 0.3s ease;
        }

        .loading11-container::after {
          content: "";
          height: 100%;
          width: 100%;
          border-radius: calc(var(--uib-stroke) / 2);
          animation: wobble var(--uib-speed) ease-in-out infinite;
          transform: translateX(-95%);
          background-color: var(--uib-color);
          transition: background-color 0.3s ease;
        }

        @keyframes wobble {
          0%,
          100% {
            transform: translateX(-95%);
          }
          50% {
            transform: translateX(95%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading11;
