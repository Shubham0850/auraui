import React from "react";
import InfinityFooter from "@/components/Footer/InfinityFooter";

type Props = {};

function Infinity({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <InfinityFooter />
    </div>
  );
}

export default Infinity;
