import React from "react";
import clsx from "clsx";

const Loading29 = ({
  size = 45,
  color = "black",
  speed = "2s",
}: {
  size?: number;
  color?: string;
  speed?: string;
}) => {
  const dotStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    backgroundColor: color,
    animation: `pulse ${speed} linear infinite`,
    transform: "scale(0)",
    opacity: 0,
    transition: "background-color 0.3s ease",
  };

  const delays = [
    "0s",
    `calc(${speed} / -4)`,
    `calc(${speed} * -0.5)`,
    `calc(${speed} * -0.75)`,
  ];

  return (
    <div
      className={clsx("loading29-container")}
      style={
        {
          "--uib-size": `${size}px`,
          "--uib-color": color,
          "--uib-speed": speed,
          height: `${size}px`,
          width: `${size}px`,
          position: "relative",
        } as React.CSSProperties
      }
    >
      {delays.map((delay, index) => (
        <div
          key={index}
          className="pulse-circle"
          style={{ ...dotStyle, animationDelay: delay }}
        />
      ))}

      <style jsx>{`
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

export default Loading29;
