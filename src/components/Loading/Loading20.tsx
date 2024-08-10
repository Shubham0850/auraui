import React from 'react';
import clsx from 'clsx';

const Loading20 = ({ size = 40, color = 'black', speed = '2.5s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    // @ts-ignore
    '--uib-dot-size': `calc(${size}px * 0.18)`,
    position: 'relative',
    top: '15%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: `${size}px`,
    height: `${size}px`,
  };

  const dotStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  };

  const dotBeforeStyles: React.CSSProperties = {
    content: "''",
    display: 'block',
    height: `calc(${size}px * 0.22)`,
    width: `calc(${size}px * 0.22)`,
    borderRadius: '50%',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading20-container')} style={containerStyles}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading20-dot')}
          style={{
            ...dotStyles,
            transform: `translateX(calc(${size}px * ${index * 0.4}))`,
            animation: `leapFrog ${speed} ease calc(${speed} / -${1.5 * index}) infinite`,
          }}
        >
          <div style={dotBeforeStyles} />
        </div>
      ))}
      <style jsx>{`
        @keyframes leapFrog {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          33.333% {
            transform: translateX(0) rotate(180deg);
          }
          66.666% {
            transform: translateX(calc(${size}px * -0.38)) rotate(180deg);
          }
          99.999% {
            transform: translateX(calc(${size}px * -0.78)) rotate(180deg);
          }
          100% {
            transform: translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading20;
