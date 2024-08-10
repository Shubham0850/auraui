import React from 'react';
import clsx from 'clsx';

const Loading10 = ({ size = 80, color = 'black', speed = '1.4s', stroke = 5, bgOpacity = 0.1 }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    '--uib-stroke': `${stroke}px`,
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
    animation: `zoom ${speed} ease-in-out infinite`,
    transform: 'translateX(-100%)',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading10-container')} style={containerStyles}>
      <style jsx>{`
        .loading10-container::before {
          ${Object.entries(beforeStyles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        .loading10-container::after {
          ${Object.entries(afterStyles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        @keyframes zoom {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading10;
