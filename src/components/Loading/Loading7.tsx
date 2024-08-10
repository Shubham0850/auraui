import React from 'react';
import clsx from 'clsx';

const Loading7 = ({ size = 40, color = 'black', speed = '0.9s' }) => {
  const containerStyles: React.CSSProperties = {
		// @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: `${size}px`,
    width: `${size}px`,
  };

  const dotStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  };

  const dotBeforeStyles: React.CSSProperties = {
    content: "''",
    height: '20%',
    width: '20%',
    borderRadius: '50%',
    backgroundColor: color,
    transform: 'scale(0)',
    opacity: 0.5,
    animation: `pulse calc(${speed} * 1.111) ease-in-out infinite`,
    transition: 'background-color 0.3s ease',
  };

  const rotations = [0, 45, 90, 135, 180, 225, 270, 315];
  const delays = [-0.875, -0.75, -0.625, -0.5, -0.375, -0.25, -0.125];

  return (
    <div className={clsx('loading7-container')} style={containerStyles}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading7-dot')}
          style={{
            ...dotStyles,
            transform: `rotate(${rotations[index]}deg)`,
          }}
        >
          <div
            style={{
              ...dotBeforeStyles,
              animationDelay: index > 0 ? `calc(${speed} * ${delays[index - 1]})` : '0s',
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(0);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading7;
