import React from 'react';
import clsx from 'clsx';

const Loading28 = ({ size = 40, color = 'black', speed = '1.75s' }) => {
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
  };

  const pseudoElementStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    backgroundColor: color,
    animation: `pulse ${speed} ease-in-out infinite`,
    transform: 'scale(0)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading28-container')} style={containerStyles}>
      <style jsx>{`
        .loading28-container::before {
          ${Object.entries(pseudoElementStyles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        .loading28-container::after {
          ${Object.entries({
            ...pseudoElementStyles,
            animationDelay: `calc(${speed} / -2)`,
          })
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading28;
