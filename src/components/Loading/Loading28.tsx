import React from "react";
import clsx from "clsx";

const Loading28 = ({
  size = 40,
  color = "black",
  speed = "1.75s",
}: {
  size?: number;
  color?: string;
  speed?: string;
}) => {
  return (
    <div
      className={clsx("loading28-container")}
      style={
        {
          "--uib-size": `${size}px`,
          "--uib-color": color,
          "--uib-speed": speed,
          height: `${size}px`,
          width: `${size}px`,
        } as React.CSSProperties
      }
    >
      <div className="pulse-circle ring1" />
      <div className="pulse-circle ring2" />

      <style jsx>{`
        .loading28-container {
          position: relative;
        }

        .pulse-circle {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-color: var(--uib-color);
          animation: pulse var(--uib-speed) ease-in-out infinite;
          transform: scale(0);
          transition: background-color 0.3s ease;
        }

        .pulse-circle.ring2 {
          animation-delay: calc(var(--uib-speed) / -2);
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading28;
