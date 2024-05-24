import React, { useState } from "react";
import { ArrowUpRight, CircleDollarSign, MoonIcon } from "lucide-react";

interface TabsProps {
  items: string[];
  children: React.ReactNode;
  previewLink: string;
}

const Tabs = ({ items, children, previewLink }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(items[0]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handlePreviewClick = () => {
    window.open(`/preview/${previewLink}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex md:flex-row flex-col gap-4 items-center my-4 w-full justify-between">
        <div className="relative cursor-pointer py-2 px-4 rounded-lg dark:bg-customDark bg-gray-100 text-gray-500 flex items-center">
          <CircleDollarSign className="w-4 h-4 mr-2" />
          Free component
        </div>

        <div className="flex items-center space-x-2">
          {/* Preview */}
          <div className="relative cursor-pointer p-3 rounded-lg dark:bg-customDark bg-gray-100 text-gray-500">
            <MoonIcon className="w-4 h-4" />
          </div>
          {/* Tabs */}
          <div className="flex space-x-1 dark:bg-customDark bg-gray-100 p-1 rounded-lg">
            {items.map((item) => (
              <div
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative cursor-pointer px-4 py-1 rounded-sm  ${activeTab === item
                  ? "bg-gray-200 dark:bg-customDark"
                  : "text-gray-500"
                  }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Preview link */}
          <div
            className="relative cursor-pointer p-3 rounded-lg dark:bg-customDark bg-gray-100 text-gray-500"
            onClick={handlePreviewClick}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          {React.Children.map(children, (child, index) => {
            if (
              React.isValidElement(child) &&
              child.props.label === activeTab
            ) {
              if (activeTab === items[1]) {
                // Assuming the second tab is the one with the code
                return (
                  <div key={index} className="relative">
                    <div
                      className={`overflow-hidden  ${isCollapsed ? "h-[500px]" : "h-auto"
                        } transition-all duration-300`}
                    >
                      {child}
                    </div>
                    <button
                      className="mt-4 ml-[45%] px-3 py-2 hover:bg-gray-800 bg-gray-900 text-gray-100 font-medium rounded-2xl "
                      onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                      {isCollapsed ? "Show More" : "Show Less"}
                    </button>
                  </div>
                );
              } else {
                return <div key={index}>{child}</div>;
              }
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const TabComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-2 border-gray-100 dark:border-customDark rounded-2xl overflow-hidden">
      <div className="h-8 dark:bg-customDark px-4 flex items-center space-x-2 bg-gray-100">
        <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
        <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
        <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
      </div>
      {children}
    </div>
  );
};

export { Tabs, TabComponent };
