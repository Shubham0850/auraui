import React from 'react';
import clsx from 'clsx';

const Loading4 = ({ size = 40, color = 'black', speed = '1s', stroke = 3 }) => {
  const containerStyles: React.CSSProperties = {
		// @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    '--uib-stroke': `${stroke}px`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: `${size}px`,
    width: `${size}px`,
  };

  const lineStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: `calc(50% - ${stroke / 2}px)`,
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    width: `${stroke}px`,
  };

  const lineBeforeStyles: React.CSSProperties = {
    content: "''",
    height: '22%',
    width: '100%',
    borderRadius: `${stroke / 2}px`,
    backgroundColor: color,
    animation: `pulse ${speed} ease-in-out infinite`,
    transition: 'background-color 0.3s ease',
    transformOrigin: 'center bottom',
  };

  return (
    <div className={clsx('loading4-container')} style={containerStyles}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading4-line')}
          style={{
            ...lineStyles,
            transform: `rotate(${(360 / -12) * (index + 1)}deg)`,
          }}
        >
          <div
            style={{
              ...lineBeforeStyles,
              animationDelay: `calc(${speed} / -12 * ${index + 1})`,
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes pulse {
          0%,
          80%,
          100% {
            transform: scaleY(0.75);
            opacity: 0;
          }
          20% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading4;
