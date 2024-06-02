import React, { useState } from "react";
import { LuArrowUpRight, LuCircleDollarSign, LuMoon } from "react-icons/lu";

interface TabsProps {
  items: string[];
  children: React.ReactNode;
  previewLink: string;
}

const Tabs = ({ items, children, previewLink }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(items[0]);

  const handlePreviewClick = () => {
    window.open(`/preview/${previewLink}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex md:flex-row flex-col gap-4 items-center my-4 w-full justify-between">
        <div className="relative cursor-pointer py-2 px-4 rounded-lg dark:bg-customDark bg-gray-100 text-gray-500 flex items-center">
          <LuCircleDollarSign className="w-4 h-4 mr-2" />
          Free component
        </div>

        <div className="flex items-center space-x-2">
          {/* Preview */}
          {/* Dark Mode Toggle */}
          <div className="relative cursor-pointer p-3 rounded-lg dark:bg-customDark bg-gray-100 text-gray-500">
            <LuMoon className="w-4 h-4" />
          </div>
          {/* Tabs */}
          <div className="flex space-x-1 dark:bg-customDark bg-gray-100 p-1 rounded-lg">
            {items.map((item) => (
              <div
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative cursor-pointer px-4 py-1 rounded-sm ${
                  activeTab === item
                    ? "bg-gray-200 dark:bg-[#3f3f41]"
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
            <LuArrowUpRight className="w-4 h-4" />
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
                    <div className="h-[400px] border-2 border-customDark rounded-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                      {child}
                    </div>
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
      <div>{children}</div>
    </div>
  );
};

export { Tabs, TabComponent };
