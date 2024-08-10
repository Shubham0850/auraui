import React from 'react';
import clsx from 'clsx';

const Loading16 = ({ size = 35, color = 'black', speed = '1.5s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    // @ts-ignore
    '--uib-color': color,
    // @ts-ignore
    '--uib-speed': speed,
    // @ts-ignore
    '--uib-dot-size': `calc(${size}px * 0.4)`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `calc(${size}px * 0.4)`,
    width: `${size}px`,
  };

  const pseudoElementStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    height: `calc(${size}px * 0.4)`,
    width: `calc(${size}px * 0.4)`,
    borderRadius: '50%',
    backgroundColor: color,
    flexShrink: 0,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading16-container')} style={containerStyles}>
      <style jsx>{`
        .loading16-container::before {
          ${Object.entries({
            ...pseudoElementStyles,
            animation: `orbit ${speed} linear infinite`,
          })
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        .loading16-container::after {
          ${Object.entries({
            ...pseudoElementStyles,
            animation: `orbit ${speed} linear calc(${speed} / -2) infinite`,
          })
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

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

export default Loading16;
