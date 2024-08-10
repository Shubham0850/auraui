import React from 'react';
import clsx from 'clsx';

const Loading30 = ({ size = 35, color = 'black', speed = '0.9s', stroke = 3.5 }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    '--uib-stroke': `${stroke}px`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${size}px`,
    width: `${size}px`,
  };

  const lineStyles: React.CSSProperties = {
    position: 'absolute',
    top: `calc(50% - ${stroke}px / 2)`,
    left: 0,
    height: `${stroke}px`,
    width: '100%',
    borderRadius: `calc(${stroke}px / 2)`,
    backgroundColor: color,
    animation: `rotate ${speed} ease-in-out infinite`,
    transition: 'background-color 0.3s ease',
  };

  const opacities = [1, 0.8, 0.6, 0.4, 0.2, 0.1];
  const delays = [-0.375, -0.375, -0.3, -0.225, -0.15, -0.075];

  return (
    <div className={clsx('loading30-container')} style={containerStyles}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading30-line')}
          style={{
            ...lineStyles,
            animationDelay: `calc(${speed} * ${delays[index]})`,
            opacity: opacities[index],
          }}
        />
      ))}
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading30;
