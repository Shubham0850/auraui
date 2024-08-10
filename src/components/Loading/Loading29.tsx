import React from 'react';
import clsx from 'clsx';

const Loading29 = ({ size = 45, color = 'black', speed = '2s' }) => {
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

  const pulseStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    backgroundColor: color,
    animation: `pulse ${speed} linear infinite`,
    transform: 'scale(0)',
    opacity: 0,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading29-container')} style={containerStyles}>
      <div className={clsx('loading29-dot')}>
        <style jsx>{`
          .loading29-container::before {
            ${Object.entries(pulseStyles)
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          .loading29-container::after {
            ${Object.entries({
              ...pulseStyles,
              animationDelay: `calc(${speed} / -4)`,
            })
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          .loading29-dot::before {
            ${Object.entries({
              ...pulseStyles,
              animationDelay: `calc(${speed} * -0.5)`,
            })
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          .loading29-dot::after {
            ${Object.entries({
              ...pulseStyles,
              animationDelay: `calc(${speed} * -0.75)`,
            })
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }

          @keyframes pulse {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loading29;
