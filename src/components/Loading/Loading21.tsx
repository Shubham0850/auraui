import React from 'react';
import clsx from 'clsx';

const Loading21 = ({ size = 78, color = 'black', speed = '1.4s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    position: 'relative',
    top: '28%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `calc(${size}px * 0.51)`,
    height: `calc(${size}px * 0.51)`,
  };

  const dotStyles: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    height: '100%',
    width: '25%',
    transformOrigin: 'center top',
  };

  const dotAfterStyles: React.CSSProperties = {
    content: "''",
    display: 'block',
    width: '100%',
    height: '25%',
    borderRadius: '50%',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading21-container')} style={containerStyles}>
      <div className={clsx('loading21-dot')} style={{ ...dotStyles, animation: `swing ${speed} linear infinite` }}>
        <div style={dotAfterStyles} />
      </div>
      <div className={clsx('loading21-dot')} style={{ ...dotStyles }}>
        <div style={dotAfterStyles} />
      </div>
      <div className={clsx('loading21-dot')} style={{ ...dotStyles }}>
        <div style={dotAfterStyles} />
      </div>
      <div className={clsx('loading21-dot')} style={{ ...dotStyles, animation: `swing2 ${speed} linear infinite` }}>
        <div style={dotAfterStyles} />
      </div>
      <style jsx>{`
        @keyframes swing {
          0% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          25% {
            transform: rotate(70deg);
            animation-timing-function: ease-in;
          }
          50% {
            transform: rotate(0deg);
            animation-timing-function: linear;
          }
        }

        @keyframes swing2 {
          0% {
            transform: rotate(0deg);
            animation-timing-function: linear;
          }
          50% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          75% {
            transform: rotate(-70deg);
            animation-timing-function: ease-in;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading21;
