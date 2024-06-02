import React, { useState } from "react";
import { LuCircleDollarSign, LuMoon } from "react-icons/lu";
import AnimatedTab from "../ui/animated-tab";
import { FaAndroid, FaApple, FaCode } from "react-icons/fa";
import SourceCodeViewer from "@/utils/SourceCodeViewer";

interface TabsProps {
  items: string[];
  children: React.ReactNode;
  previewLink: string;
}

const IPhoneMockup: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="border-4 border-gray-100 dark:border-customDark shadow-2xl rounded-3xl overflow-hidden max-w-xs mx-auto relative bg-black">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 dark:bg-customDark rounded-full"></div>
      <div>
        <img
          src={imageUrl}
          alt="iPhone 15 Pro Max Screenshot"
          className="w-full"
        />
      </div>
    </div>
  );
};

const AndroidMockup: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="border-4 border-gray-100 dark:border-customDark shadow-2xl rounded-3xl overflow-hidden max-w-xs mx-auto relative bg-black">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 dark:bg-background rounded-full"></div>
      <div>
        <img
          src={imageUrl}
          alt="iPhone 15 Pro Max Screenshot"
          className="w-full"
        />
      </div>
    </div>
  );
};

const tabs = [
  {
    name: "android",
    label: "Android",
    icon: <FaAndroid />,
    component: (
      <AndroidMockup
        imageUrl={"https://itc.ua/wp-content/uploads/2023/10/IMG_0262.jpeg"}
      />
    ),
  },
  {
    name: "ios",
    label: "iOS",
    icon: <FaApple />,
    component: (
      <IPhoneMockup
        imageUrl={"https://itc.ua/wp-content/uploads/2023/10/IMG_0262.jpeg"}
      />
    ),
  },
  {
    name: "code",
    label: "Code",
    icon: <FaCode />,
    component: <SourceCodeViewer componentPath="Web3/Nft/MajnuBhai.tsx" />,
  },
];

const RnTab = ({ items, children }: TabsProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex md:flex-row flex-col gap-4 items-center my-4 w-full justify-between">
        <div className="flex items-center space-x-2">
          {/* Tabs */}
          <AnimatedTab tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export { RnTab };
