import { LuCode }  from "react-icons/lu";

import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  previewLink: string;
};

function ComponentWrapper({ children, title, previewLink }: Props) {
  return (
    <div className="space-y-10 pt-10 ">
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">{title}</h3>
          <Link href={previewLink}>
            <button className="relative cursor-pointer px-4 py-2 rounded-lg dark:bg-customDark bg-gray-100 text-gray-300 text-sm flex items-center">
              <LuCode className="w-4 h-4 mr-2" />
              Get Code
            </button>
          </Link>
        </div>
        <div className="border-2 border-gray-100 dark:border-customDark rounded-2xl overflow-hidden">
          <div className="h-8 dark:bg-customDark px-4 flex items-center space-x-2 bg-gray-100">
            <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
            <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
            <div className="w-3 h-3 dark:bg-black bg-gray-300 rounded-full" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ComponentWrapper;
