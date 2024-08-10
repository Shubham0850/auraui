import React from 'react';
import clsx from 'clsx';

const Loading8 = ({ size = 40, color = 'black', speed = '0.9s' }) => {
	const containerStyles: React.CSSProperties = {
		// @ts-ignore
		'--uib-size': `${size}px`,
		'--uib-color': color,
		'--uib-speed': speed,
		'--uib-center': `calc(${size}px / 2 - ${size}px / 5 / 2)`,
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: `${size}px`,
		width: `${size}px`,
		animation: `rotate calc(${speed} * 3) linear infinite`,
	};

	const dotStyles: React.CSSProperties = {
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%',
		width: '100%',
	};

	const dotBeforeStyles: React.CSSProperties = {
		content: "''",
		height: '20%',
		width: '20%',
		borderRadius: '50%',
		backgroundColor: color,
		animation: `oscillate ${speed} ease-in-out infinite alternate`,
		transition: 'background-color 0.3s ease',
	};

	const rotations = [0, 45, 90, 135, 180, 225, 270, 315];
	const delays = [-0.875, -0.75, -0.625, -0.5, -0.375, -0.25, -0.125];

	return (
		<div className={clsx('loading8-container')} style={containerStyles}>
			{Array.from({ length: 8 }).map((_, index) => (
				<div
					key={index}
					className={clsx('loading8-dot')}
					style={{
						...dotStyles,
						transform: `rotate(${rotations[index]}deg)`,
					}}
				>
					<div
						style={{
							...dotBeforeStyles,
							transform: 'translateX(var(--uib-center))',
							animationDelay: index > 0 ? `calc(${speed} * ${delays[index - 1]})` : '0s',
						}}
					/>
				</div>
			))}
			<style jsx>{`
        @keyframes oscillate {
          0% {
            transform: translateX(var(--uib-center)) scale(0);
            opacity: 0.25;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
		</div>
	);
};

export default Loading8;
