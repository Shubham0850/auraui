import { motion, Transition } from "framer-motion";

const dotTransition: Transition = {
	repeat: Infinity,
	repeatType: "mirror",
	duration: 0.9
};

export default function LoadingExample() {
	return (
		<div className="flex h-10">
			<motion.div
				className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 rounded-full"
				animate={{ scale: [0.75, 1] }}
				transition={{
					...dotTransition,
					delay: -0.9
				}}
			/>
			<motion.div
				className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 rounded-full"
				animate={{ scale: [0.75, 1] }}
				transition={{
					...dotTransition,
					delay: -0.6
				}}
			/>
			<motion.div
				className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 rounded-full"
				animate={{ scale: [0.75, 1] }}
				transition={{
					...dotTransition,
					delay: -0.3
				}}
			/>
		</div>
	);
}
