import React from 'react';
import clsx from 'clsx';

const Loading5 = ({ size = 37, color = 'black', speed = '0.9s', bgOpacity = 0.1 }) => {
  const containerStyles: React.CSSProperties = {
		// @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    '--uib-bg-opacity': bgOpacity,
    height: `${size}px`,
    width: `${size}px`,
    transformOrigin: 'center',
    overflow: 'visible',
  };

  const carStyles: React.CSSProperties = {
    fill: 'none',
    stroke: color,
    strokeDasharray: '15, 85',
    strokeDashoffset: 0,
    strokeLinecap: 'round',
    animation: `travel ${speed} linear infinite`,
    willChange: 'stroke-dasharray, stroke-dashoffset',
    transition: 'stroke 0.5s ease',
  };

  const trackStyles: React.CSSProperties = {
    stroke: color,
    opacity: bgOpacity,
    transition: 'stroke 0.5s ease',
  };

  return (
    <svg
      className={clsx('loading5-container')}
      x="0px"
      y="0px"
      viewBox="0 0 37 37"
      height={size}
      width={size}
      preserveAspectRatio="xMidYMid meet"
      style={containerStyles}
    >
      <path
        className="loading5-track"
        fill="none"
        strokeWidth="5"
        pathLength="100"
        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
        style={trackStyles}
      />
      <path
        className="loading5-car"
        fill="none"
        strokeWidth="5"
        pathLength="100"
        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
        style={carStyles}
      />
      <style jsx>{`
        @keyframes travel {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </svg>
  );
};

export default Loading5;
