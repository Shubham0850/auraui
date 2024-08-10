import React from 'react';
import clsx from 'clsx';

const Loading6 = ({ size = 40, color = 'black', speed = '1.5s' }) => {
  const containerStyles: React.CSSProperties = {
		// @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    '--dot-size': `calc(${size}px * 0.17)`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: `${size}px`,
    width: `${size}px`,
    animation: `smoothRotate calc(${speed} * 1.8) linear infinite`,
  };

  const dotStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    animation: `rotate ${speed} ease-in-out infinite`,
  };

  const dotBeforeStyles: React.CSSProperties = {
    content: "''",
    height: `var(--dot-size)`,
    width: `var(--dot-size)`,
    borderRadius: '50%',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  };

  const delays = [-0.835, -0.668, -0.501, -0.334, -0.167].map((delay) => `calc(${speed} * ${delay} * 0.5)`);

  return (
    <div className={clsx('loading6-container')} style={containerStyles}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading6-dot')}
          style={{
            ...dotStyles,
            animationDelay: index > 0 ? delays[index - 1] : '0s',
          }}
        >
          <div
            style={{
              ...dotBeforeStyles,
              animationDelay: index > 0 ? delays[index - 1] : '0s',
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          65%,
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes smoothRotate {
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

export default Loading6;
