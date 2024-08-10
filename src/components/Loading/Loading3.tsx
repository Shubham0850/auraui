import React from 'react';
import clsx from 'clsx';

const Loading3 = ({ size = 40, color = 'black', speed = '0.9s', stroke = 5 }) => {
  const containerStyles: React.CSSProperties = {
		// @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    '--uib-stroke': `${stroke}px`,
    '--mask-size': `calc(${size / 2}px - ${stroke}px)`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: `${size}px`,
    width: `${size}px`,
    WebkitMask: `radial-gradient(circle var(--mask-size), transparent 99%, #000 100%)`,
    mask: `radial-gradient(circle var(--mask-size), transparent 99%, #000 100%)`,
    backgroundImage: `conic-gradient(transparent 25%, ${color})`,
    animation: `spin ${speed} linear infinite`,
    borderRadius: '50%',
  };

  return (
    <div
      className={clsx('loading3-container')}
      style={containerStyles}
    >
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading3;
