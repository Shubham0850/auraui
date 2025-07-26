import React from "react";
import clsx from "clsx";

const Loading24 = ({
  size = 40,
  color = "black",
  speed = "0.9s",
}: {
  size?: number;
  color?: string;
  speed?: string;
}) => {
  return (
    <>
      <div
        className={clsx("loading24-container")}
        style={
          {
            "--uib-size": `${size}px`,
            "--uib-color": color,
            "--uib-speed": speed,
          } as React.CSSProperties
        }
      >
        <style jsx>{`
          .loading24-container {
            position: relative;
            height: calc(var(--uib-size) / 2);
            width: var(--uib-size);
            filter: url("#uib-jelly-ooze");
            animation: rotate calc(var(--uib-speed) * 2) linear infinite;
            will-change: transform;
          }

          .loading24-container::before,
          .loading24-container::after {
            content: "";
            position: absolute;
            top: 0%;
            left: 25%;
            width: 50%;
            height: 100%;
            background-color: var(--uib-color);
            border-radius: 100%;
            will-change: transform;
            transition: background-color 0.3s ease;
          }

          .loading24-container::before {
            animation: shift-left var(--uib-speed) ease infinite;
          }

          .loading24-container::after {
            animation: shift-right var(--uib-speed) ease infinite;
          }

          @keyframes rotate {
            0%,
            49.999%,
            100% {
              transform: none;
            }
            50%,
            99.999% {
              transform: rotate(90deg);
            }
          }

          @keyframes shift-left {
            0%,
            100% {
              transform: translateX(0%);
            }
            50% {
              transform: scale(0.65) translateX(-75%);
            }
          }

          @keyframes shift-right {
            0%,
            100% {
              transform: translateX(0%);
            }
            50% {
              transform: scale(0.65) translateX(75%);
            }
          }
        `}</style>
      </div>

      {/* SVG Filter for Jelly Effect */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Loading24;
