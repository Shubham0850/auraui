import React from 'react';
import clsx from 'clsx';

const Loading14 = ({ size = 60, color = 'black', speed = '1.5s' }) => {
  const containerStyles: React.CSSProperties = {
    // @ts-ignore
    '--uib-size': `${size}px`,
    '--uib-color': color,
    '--uib-speed': speed,
    '--uib-dot-size': `calc(${size}px * 0.1)`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: `calc(${size}px * 0.64)`,
    width: `calc(${size}px * 0.64)`,
  };

  const dotStyles: React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'var(--uib-dot-size)',
    width: 'var(--uib-dot-size)',
    animation: `jump ${speed} ease-in-out infinite`,
    opacity: 'var(--uib-scale)',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
  };

  const dotBeforeStyles: React.CSSProperties = {
    content: "''",
    height: '100%',
    width: '100%',
    backgroundColor: color,
    borderRadius: '50%',
    transform: 'scale(var(--uib-scale))',
    transition: 'background-color 0.3s ease',
  };

  const dots = [
    { bottom: '24%', right: '-35%', delay: '-0.48', scale: '0.94' },
    { bottom: '16%', right: '-6%', delay: '-0.4', scale: '0.96' },
    { bottom: '8%', right: '23%', delay: '-0.32', scale: '0.98' },
    { bottom: '-1%', right: '51%', delay: '-0.24', scale: '1' },
    { bottom: '38%', right: '-17.5%', delay: '-0.4', scale: '0.9' },
    { bottom: '30%', right: '10%', delay: '-0.32', scale: '0.92' },
    { bottom: '22%', right: '39%', delay: '-0.24', scale: '0.94' },
    { bottom: '14%', right: '67%', delay: '-0.16', scale: '0.96' },
    { bottom: '53%', right: '-0.8%', delay: '-0.32', scale: '0.86' },
    { bottom: '44.5%', right: '27%', delay: '-0.24', scale: '0.88' },
    { bottom: '36%', right: '55.7%', delay: '-0.16', scale: '0.9' },
    { bottom: '28.7%', right: '84.3%', delay: '-0.08', scale: '0.92' },
    { bottom: '66.8%', right: '15%', delay: '-0.24', scale: '0.82' },
    { bottom: '58.8%', right: '43%', delay: '-0.16', scale: '0.84' },
    { bottom: '50%', right: '72%', delay: '-0.08', scale: '0.86' },
    { bottom: '42%', right: '100%', delay: '0', scale: '0.88' },
  ];

  return (
    <div className={clsx('loading16-container')} style={containerStyles}>
      {dots.map((dot, index) => (
        <div
          key={index}
          className={clsx('loading16-dot')}
          style={{
            ...dotStyles,
            bottom: `calc(${dot.bottom} + var(--uib-dot-size) / 2)`,
            right: `calc(${dot.right} + var(--uib-dot-size) / 2)`,
            animationDelay: `calc(${speed} * ${dot.delay})`,
						// @ts-ignore
            '--uib-scale': dot.scale,
          }}
        >
          <div style={dotBeforeStyles} />
        </div>
      ))}
      <style jsx>{`
        @keyframes jump {
          0%, 100% {
            transform: translateY(120%);
          }
          50% {
            transform: translateY(-120%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading14;
