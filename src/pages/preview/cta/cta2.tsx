import React from "react";
import ConnectionCTASecondary from "@/components/CTA/Cta2";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <ConnectionCTASecondary />
    </div>
  );
}

export default AuraFooter;
