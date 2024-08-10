import React from 'react';
import clsx from 'clsx';

const Loading23 = ({ size = 40, color = 'black', speed = '1.6s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    position: 'relative',
    top: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: `${size}px`,
    width: `${size}px`,
  };

  const dotStyles: React.CSSProperties = {
    position: 'absolute',
    top: '13.5%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    animation: `swing ${speed} linear infinite`,
  };

  const dotBeforeStyles: React.CSSProperties = {
    content: "''",
    height: '25%',
    width: '25%',
    borderRadius: '50%',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  };

  const dots = [
    { delay: '-0.36', scale: 1, opacity: 1 },
    { delay: '-0.27', scale: 0.9, opacity: 0.8 },
    { delay: '-0.18', scale: 0.8, opacity: 0.6 },
    { delay: '-0.09', scale: 0.7, opacity: 0.4 },
  ];

  return (
    <div className={clsx('loading23-container')} style={containerStyles}>
      {dots.map((dot, index) => (
        <div
          key={index}
          className={clsx('loading23-dot')}
          style={{
            ...dotStyles,
            animationDelay: `calc(${speed} * ${dot.delay})`,
            opacity: dot.opacity,
          }}
        >
          <div
            style={{
              ...dotBeforeStyles,
              transform: `scale(${dot.scale})`,
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes swing {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          65% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading23;
