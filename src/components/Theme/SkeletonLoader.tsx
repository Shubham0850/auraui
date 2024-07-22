import React from "react";

const SourceCodeSkeleton: React.FC = () => {
  return (
    <div className="relative h-[490px] overflow-y-auto rounded-lg custom-scrollbar mt-1 animate-pulse">
      <div className="bg-gray-700 w-full h-full"></div>
    </div>
  );
};

export default SourceCodeSkeleton;
