import React from 'react';
import clsx from 'clsx';

const Loading13 = ({ size = 45, color = 'black', speed = '1.75s', bgOpacity = 0.1 }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    // @ts-ignore
    '--uib-bg-opacity': bgOpacity,
    height: '31.25px',
    width: '50px',
    transformOrigin: 'center',
    overflow: 'visible',
  };

  const pathStyles: React.CSSProperties = {
    strokeWidth: 4,
    fill: 'none',
  };

  const carStyles: React.CSSProperties = {
    ...pathStyles,
    stroke: color,
    strokeDasharray: 100,
    strokeDashoffset: 0,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    animation: `travel ${speed} ease-in-out infinite, fade ${speed} ease-out infinite`,
    willChange: 'stroke-dasharray, stroke-dashoffset',
    transition: 'stroke 0.5s ease',
  };

  const trackStyles: React.CSSProperties = {
    ...pathStyles,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    stroke: color,
    opacity: bgOpacity,
  };

  return (
    <svg
      className={clsx('loading13-container')}
      x="0px"
      y="0px"
      viewBox="0 0 50 31.25"
      height="31.25"
      width="50"
      preserveAspectRatio="xMidYMid meet"
      style={containerStyles}
    >
      <path
        className="loading13-track"
        style={trackStyles}
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
      <path
        className="loading13-car"
        style={carStyles}
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
      <style jsx>{`
        @keyframes travel {
          0% {
            stroke-dashoffset: 100;
          }
          75% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          20%, 55% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  );
};

export default Loading13;
