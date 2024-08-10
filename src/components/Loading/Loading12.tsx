import React from 'react';
import clsx from 'clsx';

const Loading12 = ({ size = 55, color = 'black', speed = '1.3s', bgOpacity = 0.1 }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    // @ts-ignore
    '--uib-bg-opacity': bgOpacity,
    height: `calc(${size}px * (2.1 / 5))`,
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
  };

  return (
    <svg
      className={clsx('loading12-container')}
      x="0px"
      y="0px"
      viewBox="0 0 55 23.1"
      height={size * (2.1 / 5)}
      width={size}
      preserveAspectRatio="xMidYMid meet"
      style={containerStyles}
    >
      <path
        className="loading12-track"
        fill="none"
        strokeWidth="4"
        pathLength="100"
        d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
        style={trackStyles}
      />
      <path
        className="loading12-car"
        fill="none"
        strokeWidth="4"
        pathLength="100"
        d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
        style={carStyles}
      />
      <style jsx>{`
        @keyframes travel {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 100;
          }
        }
      `}</style>
    </svg>
  );
};

export default Loading12;
