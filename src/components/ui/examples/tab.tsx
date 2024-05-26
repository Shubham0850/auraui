import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOGGLE_CLASSES =
	"text-sm font-medium flex items-center justify-center w-full px-6 py-2 transition-colors relative z-10";

type TabName = "One" | "Two" | "Three";

const ExampleTab = () => {
	const [selected, setSelected] = useState<TabName>("One");
	const [width, setWidth] = useState(0);
	const tabRefs = {
		One: useRef<HTMLButtonElement>(null),
		Two: useRef<HTMLButtonElement>(null),
		Three: useRef<HTMLButtonElement>(null),
	};

	useEffect(() => {
		if (tabRefs[selected].current) {
			setWidth(tabRefs[selected].current?.offsetWidth || 0);
		}
	}, [selected]);

	return (
		<div className="flex flex-col items-center">
			<div className="relative flex items-center rounded-full bg-white shadow-md">
				<button
					ref={tabRefs.One}
					className={`${TOGGLE_CLASSES} ${selected === "One" ? "text-white" : "text-gray-600"}`}
					onClick={() => setSelected("One")}
				>
					Hello
				</button>
				<button
					ref={tabRefs.Two}
					className={`${TOGGLE_CLASSES} ${selected === "Two" ? "text-white" : "text-gray-600"}`}
					onClick={() => setSelected("Two")}
				>
					Hello
				</button>
				<button
					ref={tabRefs.Three}
					className={`${TOGGLE_CLASSES} ${selected === "Three" ? "text-white" : "text-gray-600"}`}
					onClick={() => setSelected("Three")}
				>
					Three
				</button>
				<div
					className={`absolute inset-0 z-0 flex ${selected === "One"
						? "justify-start"
						: selected === "Two"
							? "justify-center"
							: "justify-end"
						}`}
				>
					<motion.span
						layout
						transition={{ type: "spring", damping: 15, stiffness: 250 }}
						className="h-full rounded-full bg-gradient-to-r from-black to-gray-800"
						style={{ width }}
					/>
				</div>
			</div>
		</div>
	);
};

export default ExampleTab;