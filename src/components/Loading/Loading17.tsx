import React from 'react';
import clsx from 'clsx';

const Loading17 = ({ size = 35, color = 'black', speed = '1.5s' }) => {
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
    height: `${size}px`,
    width: `${size}px`,
    animation: `rotate calc(${speed} * 1.667) infinite linear`,
  };

  const beforeAfterStyles: React.CSSProperties = {
    content: "''",
    position: 'absolute',
    height: 'var(--uib-dot-size)',
    width: 'var(--uib-dot-size)',
    borderRadius: '50%',
    backgroundColor: color,
    flexShrink: 0,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className={clsx('loading17-container')} style={containerStyles}>
      <style jsx>{`
        .loading17-container::before,
        .loading17-container::after {
          ${Object.entries(beforeAfterStyles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')}
        }

        .loading17-container::before {
          animation: orbit ${speed} linear infinite;
        }

        .loading17-container::after {
          animation: orbit ${speed} linear calc(${speed} / -2) infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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

export default Loading17;
