import React from 'react';
import { motion, Transition } from 'framer-motion';

const dotTransition: Transition = {
	repeat: Infinity,
	repeatType: "mirror",
	duration: 0.9
};

interface AnimatedLoadingProps {
	color?: string;
	size?: number;
}

const AnimatedLoading: React.FC<AnimatedLoadingProps> = ({ color = "from-black to-gray-800 dark:from-white dark:to-gray-300", size = 2 }) => {
	const dotSize = `${size}px`;

	return (
		<div className="flex h-10 space-x-1">
			<motion.div
				className={`w-${size} h-${size} bg-gradient-to-r ${color} rounded-full`}
				animate={{ scale: [0.75, 1] }}
				transition={{
					...dotTransition,
					delay: -0.9
				}}
				style={{ width: dotSize, height: dotSize }}
			/>
			<motion.div
				className={`w-${size} h-${size} bg-gradient-to-r ${color} rounded-full`}
				animate={{ scale: [0.75, 1] }}
				transition={{
					...dotTransition,
					delay: -0.6
				}}
				style={{ width: dotSize, height: dotSize }}
			/>
			<motion.div
				className={`w-${size} h-${size} bg-gradient-to-r ${color} rounded-full`}
				animate={{ scale: [0.75, 1] }}
				transition={{
					...dotTransition,
					delay: -0.3
				}}
				style={{ width: dotSize, height: dotSize }}
			/>
		</div>
	);
};

export default AnimatedLoading;
