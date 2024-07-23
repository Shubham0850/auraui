import React from "react";

import BlueFooter from "@/components/Footer/BlueFooter";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <BlueFooter />
    </div>
  );
}

export default AuraFooter;
