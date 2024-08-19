import React from "react";
import Cta5 from "@/components/CTA/Cta5";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Cta5/>
    </div>
  );
}

export default AuraFooter;
