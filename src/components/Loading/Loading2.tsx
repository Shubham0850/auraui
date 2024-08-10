import React from 'react';
import clsx from 'clsx';

const Loading2 = ({ size = 40, color = 'black', speed = '0.8s', bgOpacity = 0.1 }) => {
  const containerStyles: React.CSSProperties = {
    height: `${size}px`,
    width: `${size}px`,
    transformOrigin: 'center',
    animation: `rotate ${speed} linear infinite`,
    willChange: 'transform',
    overflow: 'visible',
  };

  const carStyles: React.CSSProperties = {
    fill: 'none',
    stroke: color,
    strokeDasharray: '25, 75',
    strokeDashoffset: 0,
    strokeLinecap: 'round',
    transition: 'stroke 0.5s ease',
  };

  const trackStyles: React.CSSProperties = {
    fill: 'none',
    stroke: color,
    opacity: bgOpacity,
    transition: 'stroke 0.5s ease',
  };

  return (
    <svg
      className={clsx('loading2-container')}
      viewBox="0 0 40 40"
      height={size}
      width={size}
      style={containerStyles}
    >
      <circle
        className="loading2-track"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5"
        style={trackStyles}
      />
      <circle
        className="loading2-car"
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
      `}</style>
    </svg>
  );
};

export default Loading2;
