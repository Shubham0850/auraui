import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center justify-center w-full px-6 py-2 transition-colors relative z-10";

type TabName = "One" | "Two" | "Three";

const ExampleTab = () => {
  const [selected, setSelected] = useState<TabName>("One");
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const tabRefs = {
    One: useRef<HTMLButtonElement>(null),
    Two: useRef<HTMLButtonElement>(null),
    Three: useRef<HTMLButtonElement>(null),
  };

  useEffect(() => {
    if (tabRefs[selected].current) {
      const currentTab = tabRefs[selected].current!;
      setWidth(currentTab.offsetWidth);
      setLeft(currentTab.offsetLeft);
    }
  }, [selected]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center bg-gray-200 dark:bg-customDark rounded-lg p-1">
        <button
          ref={tabRefs.One}
          className={`${TOGGLE_CLASSES} ${
            selected === "One"
              ? "text-black dark:text-white"
              : "text-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setSelected("One")}
        >
          One
        </button>
        <button
          ref={tabRefs.Two}
          className={`${TOGGLE_CLASSES} ${
            selected === "Two"
              ? "text-black dark:text-white"
              : "text-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setSelected("Two")}
        >
          Two
        </button>
        <button
          ref={tabRefs.Three}
          className={`${TOGGLE_CLASSES} ${
            selected === "Three"
              ? "text-black dark:text-white"
              : "text-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setSelected("Three")}
        >
          Three
        </button>
        <motion.div
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="absolute top-1 bottom-1 bg-white dark:bg-[#373737] rounded-md shadow-md"
          style={{ width, left }}
        />
      </div>
    </div>
  );
};

export default ExampleTab;
