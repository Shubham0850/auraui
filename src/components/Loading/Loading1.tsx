import React, { CSSProperties } from 'react';
import clsx from 'clsx';

const Loading1 = ({ size = 40, color = 'black', speed = '2s', bgOpacity = 0 }) => {
  const containerStyles: CSSProperties = {
    height: `${size}px`,
    width: `${size}px`,
    transformOrigin: 'center',
    animation: `rotate ${speed} linear infinite`,
    willChange: 'transform',
    overflow: 'visible',
  };

  const carStyles: CSSProperties = {
    fill: 'none',
    stroke: color,
    strokeDasharray: '1, 200',
    strokeDashoffset: 0,
    strokeLinecap: 'round',
    animation: `stretch calc(${speed} * 0.75) ease-in-out infinite`,
    willChange: 'stroke-dasharray, stroke-dashoffset',
    transition: 'stroke 0.5s ease',
  };

  const trackStyles: CSSProperties = {
    fill: 'none',
    stroke: color,
    opacity: bgOpacity,
    transition: 'stroke 0.5s ease',
  };

  return (
    <svg
      className={clsx('spinner-container')}
      viewBox="0 0 40 40"
      height={size}
      width={size}
      style={containerStyles}
    >
      <circle
        className="spinner-track"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5"
        style={trackStyles}
      />
      <circle
        className="spinner-car"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5"

        style={carStyles}
      />
      <style jsx>{`
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes stretch {
          0% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 75, 150;
            stroke-dashoffset: -25;
          }
          100% {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </svg>
  );
};

export default Loading1;
