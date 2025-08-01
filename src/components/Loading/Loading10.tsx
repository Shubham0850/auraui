import React from "react";
import clsx from "clsx";

const Loading10 = ({
  size = 80,
  color = "black",
  speed = "1.4s",
  stroke = 5,
  bgOpacity = 0.1,
}) => {
  return (
    <div
      className={clsx("loading10-container")}
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
        .loading10-container {
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

        .loading10-container::before {
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

        .loading10-container::after {
          content: "";
          height: 100%;
          width: 100%;
          border-radius: calc(var(--uib-stroke) / 2);
          animation: zoom var(--uib-speed) ease-in-out infinite;
          transform: translateX(-100%);
          background-color: var(--uib-color);
          transition: background-color 0.3s ease;
        }

        @keyframes zoom {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading10;
