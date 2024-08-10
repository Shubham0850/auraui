import React from 'react';
import clsx from 'clsx';

const Loading22 = ({ size = 60, color = 'black', speed = '2.5s' }) => {
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: `${size}px`,
    height: 'var(--uib-dot-size)',
  };

  const dotStyles: React.CSSProperties = {
    position: 'absolute',
    top: 'calc(50% - var(--uib-dot-size) / 2)',
    left: 'calc(0px - var(--uib-dot-size) / 2)',
    display: 'block',
    height: 'var(--uib-dot-size)',
    width: 'var(--uib-dot-size)',
    borderRadius: '50%',
    backgroundColor: color,
    animation: `stream ${speed} linear infinite both`,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading22-container')} style={containerStyles}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={clsx('loading22-dot')}
          style={{
            ...dotStyles,
            animationDelay: `calc(${speed} * ${-index * 0.2})`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes stream {
          0%, 100% {
            transform: translateX(0) scale(0);
          }
          50% {
            transform: translateX(calc(${size}px * 0.5)) scale(1);
          }
          99.999% {
            transform: translateX(calc(${size}px)) scale(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading22;
