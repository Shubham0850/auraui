import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOGGLE_CLASSES =
	"text-sm font-medium flex items-center justify-center w-full px-6 py-2 transition-colors relative z-10";

type ElementWrapperProps = {
	element: React.ReactNode;
	componentPath: string;
	previewLink: string;
}

const ElementWrapper: React.FC<ElementWrapperProps> = (
	{
		element,
		componentPath,
		previewLink,
	}
) => {
	const tabs = [
		{ name: "Code", label: "Code", icon: <CodeIcon />, component: <CodeComponent /> },
		{ name: "Preview", label: "Preview", icon: <PreviewIcon />, component: <PreviewComponent /> }
	];

	const [selected, setSelected] = useState(tabs[0].name);
	const [width, setWidth] = useState(0);
	const [left, setLeft] = useState(0);

	// Initialize refs for all tabs
	const tabRefs = useRef<{ [key: string]: React.RefObject<HTMLButtonElement> }>(
		tabs.reduce((acc, tab) => {
			acc[tab.name] = React.createRef();
			return acc;
		}, {} as { [key: string]: React.RefObject<HTMLButtonElement> })
	);

	useEffect(() => {
		// Update width and left position of the selected tab
		const currentTab = tabRefs.current[selected]?.current;
		if (currentTab) {
			setWidth(currentTab.offsetWidth);
			setLeft(currentTab.offsetLeft);
		}
	}, [selected]);

	const selectedTab = tabs.find((tab) => tab.name === selected);

	return (
		<div className="flex flex-col items-left">
			<div className="relative flex items-center bg-gray-200 dark:bg-customDark rounded-lg p-1 w-min">
				{tabs.map((tab) => (
					<button
						key={tab.name}
						ref={tabRefs.current[tab.name]}
						className={`${TOGGLE_CLASSES} ${selected === tab.name
								? "text-black dark:text-white"
								: "text-gray-600 dark:text-gray-400"
							}`}
						onClick={() => setSelected(tab.name)}
					>
						<span className="mr-2">{tab.icon}</span>
						{tab.label}
					</button>
				))}
				<motion.div
					layout
					transition={{ type: "spring", damping: 15, stiffness: 250 }}
					className="absolute top-1 bottom-1 bg-white dark:bg-[#373737] rounded-md shadow-md"
					style={{ width, left }}
				/>
			</div>
			<div className="mt-4 w-full">{selectedTab?.component}</div>
		</div>
	);
};

// Mock icons and components for demonstration
const CodeIcon: React.FC = () => <span>💻</span>;
const PreviewIcon: React.FC = () => <span>👀</span>;

const CodeComponent: React.FC = () => (
	<div>
		<h2>Code Component</h2>
		<p>This is the content of the Code tab.</p>
	</div>
);

const PreviewComponent: React.FC = () => (
	<div>
		<h2>Preview Component</h2>
		{element}
	</div>
);

export default ElementWrapper;
