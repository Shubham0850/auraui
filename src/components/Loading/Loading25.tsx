import React from "react";
import clsx from "clsx";

const Loading25 = ({
  size = 30,
  color = "black",
  speed = "1.75s",
}: {
  size?: number;
  color?: string;
  speed?: string;
}) => {
  const dotSize = size * 0.33;

  return (
    <>
      <div
        className="loading25-container"
        style={
          {
            "--uib-size": `${size}px`,
            "--uib-color": color,
            "--uib-speed": speed,
          } as React.CSSProperties
        }
      >
        {/* Top center dot */}
        <div
          className="loading25-dot"
          style={{
            top: "6%",
            left: "30%",
            animationDelay: "0s",
          }}
        />
        {/* Bottom right dot */}
        <div
          className="loading25-dot"
          style={{
            bottom: "6%",
            right: "0",
            animationDelay: `calc(${speed} * -0.666)`,
          }}
        />
        {/* Bottom left dot */}
        <div
          className="loading25-dot"
          style={{
            bottom: "6%",
            left: "0",
            animationDelay: `calc(${speed} * -0.333)`,
          }}
        />
        {/* Moving blob */}
        <div className="loading25-traveler" />

        <style jsx>{`
          .loading25-container {
            position: relative;
            height: var(--uib-size);
            width: var(--uib-size);
            filter: url("#uib-jelly-triangle-ooze");
          }

          .loading25-dot {
            position: absolute;
            width: 33%;
            height: 33%;
            border-radius: 100%;
            background-color: var(--uib-color);
            animation: grow var(--uib-speed) ease infinite;
            will-change: transform;
            transition: background-color 0.3s ease;
          }

          .loading25-traveler {
            position: absolute;
            top: 6%;
            left: 30%;
            width: 33%;
            height: 33%;
            border-radius: 100%;
            background-color: var(--uib-color);
            animation: triangulate var(--uib-speed) ease infinite;
            transition: background-color 0.3s ease;
          }

          @keyframes triangulate {
            0%,
            100% {
              transform: none;
            }
            33.333% {
              transform: translate(120%, 175%);
            }
            66.666% {
              transform: translate(-95%, 175%);
            }
          }

          @keyframes grow {
            0%,
            85%,
            100% {
              transform: scale(1.5);
            }
            50%,
            60% {
              transform: scale(0);
            }
          }
        `}</style>
      </div>

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3.333"
              result="blur"
            />
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

export default Loading25;
