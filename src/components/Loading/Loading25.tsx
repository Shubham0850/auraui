import React from 'react';
import clsx from 'clsx';

const Loading25 = ({ size = 30, color = 'black', speed = '1.75s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    position: 'relative',
    height: `${size}px`,
    width: `${size}px`,
    filter: "url('#uib-jelly-triangle-ooze')",
  };

  const dotStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    width: '33%',
    height: '33%',
    backgroundColor: color,
    borderRadius: '100%',
    willChange: 'transform',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <div className={clsx('loading25-container')} style={containerStyles}>
        <div
          className={clsx('loading25-dot')}
          style={{
            ...dotStyles,
            top: '6%',
            left: '30%',
            animation: `grow ${speed} ease infinite`,
          }}
        />
        <div
          className={clsx('loading25-traveler')}
          style={{
            position: 'absolute',
            top: '6%',
            left: '30%',
            width: '33%',
            height: '33%',
            backgroundColor: color,
            borderRadius: '100%',
            animation: `triangulate ${speed} ease infinite`,
            transition: 'background-color 0.3s ease',
          }}
        />
        <style jsx>{`
          .loading25-container::before {
            ${Object.entries({
              ...dotStyles,
              bottom: '6%',
              right: '0',
              animation: `grow ${speed} ease calc(${speed} * -0.666) infinite`,
            })
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          .loading25-container::after {
            ${Object.entries({
              ...dotStyles,
              bottom: '6%',
              left: '0',
              animation: `grow ${speed} ease calc(${speed} * -0.333) infinite`,
            })
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          @keyframes triangulate {
            0%, 100% {
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
            0%, 85%, 100% {
              transform: scale(1.5);
            }
            50%, 60% {
              transform: scale(0);
            }
          }
        `}</style>
      </div>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.333" result="blur" />
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
