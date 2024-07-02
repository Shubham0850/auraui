import React from "react";
import CompactFooter from "@/components/Footer/CompactFooter";

type Props = {};

function Compact({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <CompactFooter/>
    </div>
  );
}

export default Compact;
