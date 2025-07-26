import React from "react";
import clsx from "clsx";

const Loading27 = ({
  size = 45,
  color = "black",
  speed = "2s",
}: {
  size?: number;
  color?: string;
  speed?: string;
}) => {
  return (
    <div
      className={clsx("loading27-container")}
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
      <div className="pulse-ring ring1" />
      <div className="pulse-ring ring2" />

      <style jsx>{`
        .loading27-container {
          position: relative;
        }

        .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-color: var(--uib-color);
          animation: pulse var(--uib-speed) linear infinite;
          transform: scale(0);
          opacity: 0;
          transition: background-color 0.3s ease;
        }

        .pulse-ring.ring2 {
          animation-delay: calc(var(--uib-speed) / -2);
        }

        @keyframes pulse {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading27;
