import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import SourceCodeViewer from "../../utils/SourceCodeViewer"; // Ensure this path is correct
import { LuArrowBigRightDash } from "react-icons/lu";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center justify-center w-full px-6 py-2 transition-colors relative z-10";

type ElementWrapperProps = {
  element: React.ReactNode;
  componentPath: string;
  previewLink: string;
};

const ElementWrapper: React.FC<ElementWrapperProps> = ({
  element,
  componentPath,
  previewLink,
}) => {
  const router = useRouter();

  const tabs = [
    {
      name: "Preview",
      label: "Preview",
      icon: <PreviewIcon />,
      component: <PreviewComponent element={element} />,
    },
    {
      name: "Code",
      label: "Code",
      icon: <CodeIcon />,
      component: <CodeComponent componentPath={componentPath} />,
    },
    {
      name: "Link",
      label: "",
      icon: <LuArrowBigRightDash />,
      component: null, // No component since this will handle redirection
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
    if (tabName === "Link") {
      window.open(`/preview/${previewLink}`, "_blank");
    } else {
      setSelected(tabName);
    }
  };

  const selectedTab = tabs.find((tab) => tab.name === selected);

  return (
    <div className="flex flex-col items-left">
      <div className="relative flex items-center bg-gray-200 dark:bg-customDark rounded-lg p-1 w-min">
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

type CodeComponentProps = {
  componentPath: string;
};

const CodeComponent: React.FC<CodeComponentProps> = ({ componentPath }) => (
  <div className="h-[500px] overflow-y-auto   ">
    <SourceCodeViewer componentPath={componentPath} />
  </div>
);

const PreviewComponent: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => <div>{element}</div>;

export default ElementWrapper;
