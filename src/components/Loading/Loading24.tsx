import React from 'react';
import clsx from 'clsx';

const Loading24 = ({ size = 40, color = 'black', speed = '0.9s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    position: 'relative',
    height: `calc(${size}px / 2)`,
    width: `${size}px`,
    filter: "url('#uib-jelly-ooze')",
    animation: `rotate calc(${speed} * 2) linear infinite`,
    willChange: 'transform',
  };

  const beforeAfterStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    top: '0%',
    left: '25%',
    width: '50%',
    height: '100%',
    backgroundColor: color,
    borderRadius: '100%',
    willChange: 'transform',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <div className={clsx('loading24-container')} style={containerStyles}>
        <style jsx>{`
          .loading24-container::before {
            ${Object.entries({
              ...beforeAfterStyles,
              animation: `shift-left ${speed} ease infinite`,
            })
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          .loading24-container::after {
            ${Object.entries({
              ...beforeAfterStyles,
              animation: `shift-right ${speed} ease infinite`,
            })
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          @keyframes rotate {
            0%, 49.999%, 100% {
              transform: none;
            }
            50%, 99.999% {
              transform: rotate(90deg);
            }
          }

          @keyframes shift-left {
            0%, 100% {
              transform: translateX(0%);
            }
            50% {
              transform: scale(0.65) translateX(-75%);
            }
          }

          @keyframes shift-right {
            0%, 100% {
              transform: translateX(0%);
            }
            50% {
              transform: scale(0.65) translateX(75%);
            }
          }
        `}</style>
      </div>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
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

export default Loading24;
