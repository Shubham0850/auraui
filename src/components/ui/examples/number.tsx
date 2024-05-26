import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimateNumber({ number }: { number: number }) {
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);

	useEffect(() => {
		const animation = animate(count, number, { duration: 10 });

		return animation.stop;
	}, []);

	return <motion.h1 className="text-4xl font-bold">{rounded}</motion.h1>;
}
