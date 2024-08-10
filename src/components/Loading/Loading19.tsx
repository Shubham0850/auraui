import React from 'react';
import clsx from 'clsx';

const Loading19 = ({ size = 47, color = 'black', speed = '1s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    // @ts-ignore
    '--uib-dot-size': `calc(${size}px * 0.18)`,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: `calc(${size}px * 0.5)`,
    width: `${size}px`,
  };

  const dotStyles: React.CSSProperties = {
    flexShrink: 0,
    width: `calc(${size}px * 0.17)`,
    height: `calc(${size}px * 0.17)`,
    borderRadius: '50%',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  };

  const delays = [-0.45, -0.3, -0.15, 0];

  return (
    <div className={clsx('loading19-container')} style={containerStyles}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading19-dot')}
          style={{
            ...dotStyles,
            animation: `jump ${speed} ease-in-out calc(${speed} * ${delays[index]}) infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes jump {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-200%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading19;
