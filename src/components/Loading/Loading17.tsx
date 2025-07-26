import React from "react";
import clsx from "clsx";

const Loading17 = ({
  size = 35,
  color = "black",
  speed = "1.5s",
}: {
  size?: number;
  color?: string;
  speed?: string;
}) => {
  return (
    <div
      className={clsx("loading17-container")}
      style={
        {
          "--uib-size": `${size}px`,
          "--uib-color": color,
          "--uib-speed": speed,
          "--uib-dot-size": `calc(${size}px * 0.4)`,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        .loading17-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--uib-size);
          width: var(--uib-size);
          animation: rotate calc(var(--uib-speed) * 1.667) infinite linear;
        }

        .loading17-container::before,
        .loading17-container::after {
          content: "";
          position: absolute;
          height: var(--uib-dot-size);
          width: var(--uib-dot-size);
          border-radius: 50%;
          background-color: var(--uib-color);
          transition: background-color 0.3s ease;
        }

        .loading17-container::before {
          animation: orbit var(--uib-speed) linear infinite;
        }

        .loading17-container::after {
          animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2)
            infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit {
          0% {
            transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
            opacity: 0.65;
          }
          25% {
            transform: translateX(0%) scale(0.47368);
            opacity: 0.3;
          }
          50% {
            transform: translateX(calc(var(--uib-size) * -0.25)) scale(0.73684);
            opacity: 0.65;
          }
          75% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
            opacity: 0.65;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading17;
