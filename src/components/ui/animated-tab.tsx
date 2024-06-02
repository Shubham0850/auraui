import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center justify-center w-full px-6 py-2 transition-colors relative z-10";

interface Tab {
  name: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

interface TabComponentProps {
  tabs: Tab[];
}

const AnimatedTab: React.FC<TabComponentProps> = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0].name);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const tabRefs = tabs.reduce((acc, tab) => {
    acc[tab.name] = useRef<HTMLButtonElement>(null);
    return acc;
  }, {} as { [key: string]: React.RefObject<HTMLButtonElement> });

  useEffect(() => {
    if (tabRefs[selected]?.current) {
      const currentTab = tabRefs[selected].current!;
      setWidth(currentTab.offsetWidth);
      setLeft(currentTab.offsetLeft);
    }
  }, [selected, tabRefs]);

  const selectedTab = tabs.find(tab => tab.name === selected);

  return (
    <div className="flex flex-col items-left">
      <div className="relative flex items-center bg-gray-200 dark:bg-customDark rounded-lg p-1 w-min">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            ref={tabRefs[tab.name]}
            className={`${TOGGLE_CLASSES} ${
              selected === tab.name
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
      <div className="mt-4 w-full">
        {selectedTab?.component}
      </div>
    </div>
  );
};

export default AnimatedTab;
