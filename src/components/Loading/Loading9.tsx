import React from 'react';
import clsx from 'clsx';

const Loading9 = ({ size = 45, color = 'black', speed = '1.75s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '20%',
    justifyContent: 'space-between',
    width: `${size}px`,
    height: `calc(${size}px * 0.6)`,
  };

  const cubeStyles: React.CSSProperties = {
    flexShrink: 0,
    width: `calc(${size}px * 0.2)`,
    height: `calc(${size}px * 0.2)`,
    animation: `jump ${speed} ease-in-out infinite`,
  };

  const cubeInnerStyles: React.CSSProperties = {
    display: 'block',
    height: '100%',
    width: '100%',
    borderRadius: '25%',
    backgroundColor: color,
    transformOrigin: 'center bottom',
    animation: `morph ${speed} ease-in-out infinite`,
    transition: 'background-color 0.3s ease',
  };

  const delays = [-0.36, -0.2];

  return (
    <div className={clsx('loading9-container')} style={containerStyles}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading9-cube')}
          style={{
            ...cubeStyles,
            animationDelay: index > 0 ? `calc(${speed} * ${delays[index - 1]})` : '0s',
          }}
        >
          <div
            style={{
              ...cubeInnerStyles,
              animationDelay: index > 0 ? `calc(${speed} * ${delays[index - 1]})` : '0s',
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes jump {
          0% {
            transform: translateY(0px);
          }
          30% {
            transform: translateY(0px);
            animation-timing-function: ease-out;
          }
          50% {
            transform: translateY(-200%);
            animation-timing-function: ease-in;
          }
          75% {
            transform: translateY(0px);
            animation-timing-function: ease-in;
          }
        }

        @keyframes morph {
          0% {
            transform: scaleY(1);
          }
          10% {
            transform: scaleY(1);
          }
          20%, 25% {
            transform: scaleY(0.6) scaleX(1.3);
            animation-timing-function: ease-in-out;
          }
          30% {
            transform: scaleY(1.15) scaleX(0.9);
            animation-timing-function: ease-in-out;
          }
          40% {
            transform: scaleY(1);
          }
          70%, 85%, 100% {
            transform: scaleY(1);
          }
          75% {
            transform: scaleY(0.8) scaleX(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading9;
