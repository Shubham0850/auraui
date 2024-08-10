import React from 'react';
import clsx from 'clsx';

const Loading11 = ({ size = 80, color = 'black', speed = '1.75s', stroke = 5, bgOpacity = 0.1 }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    // @ts-ignore
    '--uib-stroke': `${stroke}px`,
    // @ts-ignore
    '--uib-bg-opacity': bgOpacity,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${stroke}px`,
    width: `${size}px`,
    borderRadius: `calc(${stroke}px / 2)`,
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
  };

  const beforeStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: color,
    opacity: bgOpacity,
    transition: 'background-color 0.3s ease',
  };

  const afterStyles: React.CSSProperties = {
    content: "''",
    height: '100%',
    width: '100%',
    borderRadius: `calc(${stroke}px / 2)`,
    animation: `wobble ${speed} ease-in-out infinite`,
    transform: 'translateX(-95%)',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading11-container')} style={containerStyles}>
      <style jsx>{`
        .loading11-container::before {
          ${Object.entries(beforeStyles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        .loading11-container::after {
          ${Object.entries(afterStyles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        @keyframes wobble {
          0%, 100% {
            transform: translateX(-95%);
          }
          50% {
            transform: translateX(95%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading11;
