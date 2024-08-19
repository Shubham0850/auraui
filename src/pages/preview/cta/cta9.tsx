import React from "react";
import SmallCTA from "@/components/CTA/Cta9";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <SmallCTA />
    </div>
  );
}

export default AuraFooter;
