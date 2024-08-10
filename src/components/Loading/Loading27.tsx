import React from 'react';
import clsx from 'clsx';

const Loading27 = ({ size = 45, color = 'black', speed = '2s' }) => {
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

  const beforeAfterStyles: React.CSSProperties = {
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
    <div className={clsx('loading27-container')} style={containerStyles}>
      <style jsx>{`
        .loading27-container::before,
        .loading27-container::after {
          ${Object.entries(beforeAfterStyles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        .loading27-container::after {
          animation-delay: calc(${speed} / -2);
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
  );
};

export default Loading27;
