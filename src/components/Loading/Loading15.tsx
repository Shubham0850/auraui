import React from 'react';
import clsx from 'clsx';

const Loading15 = ({ size = 45, color = 'black', speed = '2.5s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${size}px`,
    width: `${size}px`,
  };

  const sliceStyles: React.CSSProperties = {
    position: 'relative',
    height: `calc(${size}px / 6)`,
    width: '100%',
  };

  const sliceBeforeAfterStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: `calc(50% - ${size}px / 12)`,
    height: '100%',
    width: `calc(100% / 6)`,
    borderRadius: '50%',
    backgroundColor: color,
    flexShrink: 0,
    animation: `orbit ${speed} linear infinite`,
    transition: 'background-color 0.3s ease',
  };

  const animationDelays = [
    { a: `calc(${speed} / -2)`, b: `calc(${speed} / -6)` },
    { a: `calc(${speed} / -2 + ${speed} / -6)` },
    { a: `calc(${speed} / -2 + ${speed} / -6 * 2)` },
    { a: `calc(${speed} / -2 + ${speed} / -6 * 3)` },
    { a: `calc(${speed} / -2 + ${speed} / -6 * 4)` },
    { a: `calc(${speed} / -2 + ${speed} / -6 * 5)` },
  ];

  return (
    <div className={clsx('loading15-container')} style={containerStyles}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className={clsx('loading15-slice')} style={sliceStyles}>
          <div
            style={{
              ...sliceBeforeAfterStyles,
              animationDelay: animationDelays[index].b || '0s',
            }}
          />
          <div
            style={{
              ...sliceBeforeAfterStyles,
              animationDelay: animationDelays[index].a || '0s',
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: translateX(calc(${size}px * 0.25)) scale(0.73684);
            opacity: 0.65;
          }
          5% {
            transform: translateX(calc(${size}px * 0.235)) scale(0.684208);
            opacity: 0.58;
          }
          10% {
            transform: translateX(calc(${size}px * 0.182)) scale(0.631576);
            opacity: 0.51;
          }
          15% {
            transform: translateX(calc(${size}px * 0.129)) scale(0.578944);
            opacity: 0.44;
          }
          20% {
            transform: translateX(calc(${size}px * 0.076)) scale(0.526312);
            opacity: 0.37;
          }
          25% {
            transform: translateX(0%) scale(0.47368);
            opacity: 0.3;
          }
          30% {
            transform: translateX(calc(${size}px * -0.076)) scale(0.526312);
            opacity: 0.37;
          }
          35% {
            transform: translateX(calc(${size}px * -0.129)) scale(0.578944);
            opacity: 0.44;
          }
          40% {
            transform: translateX(calc(${size}px * -0.182)) scale(0.631576);
            opacity: 0.51;
          }
          45% {
            transform: translateX(calc(${size}px * -0.235)) scale(0.684208);
            opacity: 0.58;
          }
          50% {
            transform: translateX(calc(${size}px * -0.25)) scale(0.73684);
            opacity: 0.65;
          }
          55% {
            transform: translateX(calc(${size}px * -0.235)) scale(0.789472);
            opacity: 0.72;
          }
          60% {
            transform: translateX(calc(${size}px * -0.182)) scale(0.842104);
            opacity: 0.79;
          }
          65% {
            transform: translateX(calc(${size}px * -0.129)) scale(0.894736);
            opacity: 0.86;
          }
          70% {
            transform: translateX(calc(${size}px * -0.076)) scale(0.947368);
            opacity: 0.93;
          }
          75% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
          80% {
            transform: translateX(calc(${size}px * 0.076)) scale(0.947368);
            opacity: 0.93;
          }
          85% {
            transform: translateX(calc(${size}px * 0.129)) scale(0.894736);
            opacity: 0.86;
          }
          90% {
            transform: translateX(calc(${size}px * 0.182)) scale(0.842104);
            opacity: 0.79;
          }
          95% {
            transform: translateX(calc(${size}px * 0.235)) scale(0.789472);
            opacity: 0.72;
          }
          100% {
            transform: translateX(calc(${size}px * 0.25)) scale(0.73684);
            opacity: 0.65;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading15;
