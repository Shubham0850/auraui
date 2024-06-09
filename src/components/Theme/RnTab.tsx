import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LuArrowBigRightDash, LuCircleDollarSign } from "react-icons/lu";
import { FaAndroid, FaApple, FaCode } from "react-icons/fa";
import SourceCodeViewer from "@/utils/SourceCodeViewer";

interface TabsProps {
  previewLink: string;
  componentPath: string;
  iPhoneMockupUrl: string;
  androidMockupUrl: string;
}

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center justify-center px-6 py-2 transition-colors relative z-10";

const IPhoneMockup: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="border-4 border-gray-100 dark:border-customDark shadow-2xl rounded-3xl overflow-hidden max-w-xs mx-auto relative bg-black m-5">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 dark:bg-customDark rounded-full"></div>
      <div>
        <img src={imageUrl} alt="iPhone Screenshot" className="w-full" />
      </div>
    </div>
  );
};

const AndroidMockup: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="border-4 border-gray-100 dark:border-customDark shadow-2xl rounded-3xl overflow-hidden max-w-xs mx-auto relative bg-black m-5">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 dark:bg-background rounded-full"></div>
      <div>
        <img src={imageUrl} alt="Android Screenshot" className="w-full" />
      </div>
    </div>
  );
};

const RnTab: React.FC<TabsProps> = ({
  previewLink,
  componentPath,
  iPhoneMockupUrl,
  androidMockupUrl,
}) => {
  const tabs = [
    {
      name: "android",
      label: "Android",
      icon: <FaAndroid />,
      component: <AndroidMockup imageUrl={androidMockupUrl} />,
    },
    {
      name: "ios",
      label: "iOS",
      icon: <FaApple />,
      component: <IPhoneMockup imageUrl={iPhoneMockupUrl} />,
    },
    {
      name: "code",
      label: "Code",
      icon: <FaCode />,
      component: <SourceCodeViewer componentPath={componentPath} />,
    },
  ];

  const [selected, setSelected] = useState(tabs[0].name);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  const tabRefs = useRef<{ [key: string]: React.RefObject<HTMLButtonElement> }>(
    tabs.reduce((acc, tab) => {
      acc[tab.name] = React.createRef();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLButtonElement> })
  );

  useEffect(() => {
    const currentTab = tabRefs.current[selected]?.current;
    if (currentTab) {
      setWidth(currentTab.offsetWidth);
      setLeft(currentTab.offsetLeft);
    }
  }, [selected]);

  const handleTabClick = (tabName: string) => {
    setSelected(tabName);
  };

  const selectedTab = tabs.find((tab) => tab.name === selected);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative mt-3 flex justify-between w-full ">
        <div className="flex  bg-gray-200 dark:bg-customDark rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              ref={tabRefs.current[tab.name]}
              className={`${TOGGLE_CLASSES} ${
                selected === tab.name
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        <motion.div
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="absolute top-1 bottom-1 bg-white dark:bg-[#373737] rounded-md shadow-md"
          style={{ width, left }}
        />
        <div className="relative cursor-pointer py-2 px-4 rounded-lg dark:bg-customDark bg-gray-100 text-gray-500 flex items-center">
          <LuCircleDollarSign className="w-4 h-4 mr-2" />
          Free component
        </div>
      </div>

      <div className="mt-4 w-full">
        <div className="h-8  dark:bg-customDark px-4 rounded-b-none rounded-2xl flex items-center space-x-2 bg-gray-100">
          <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
          <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
          <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
        </div>
        <div className="border-2 rounded-t-none border-gray-100 dark:border-customDark rounded-2xl">
          {selectedTab?.component}
        </div>
      </div>
    </div>
  );
};

export { RnTab };
