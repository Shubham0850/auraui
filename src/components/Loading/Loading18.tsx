import React from 'react';
import clsx from 'clsx';

const Loading18 = ({ size = 40, color = 'black', speed = '1.3s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    // @ts-ignore
    '--uib-dot-size': '25%',
    position: 'relative',
    display: 'inline-block',
    height: `${size}px`,
    width: `${size}px`,
    animation: `spin ${speed} infinite linear`,
  };

  const dotStyles: React.CSSProperties = {
    position: 'absolute',
    left: 'calc(50% - var(--uib-dot-size) / 2)',
    height: '100%',
    width: 'var(--uib-dot-size)',
  };

  const dotAfterStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    height: '0%',
    width: '100%',
    paddingBottom: '100%',
    backgroundColor: color,
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading18-container')} style={containerStyles}>
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className={clsx('loading18-dot')}
          style={{
            ...dotStyles,
            transform: index === 0 ? 'rotate(120deg)' : index === 1 ? 'rotate(-120deg)' : 'none',
          }}
        >
          <div
            style={{
              ...dotAfterStyles,
              animation: `wobble ${speed} infinite ease-in-out`,
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes wobble {
          0%, 100% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(65%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading18;
