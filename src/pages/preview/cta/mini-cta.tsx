import React from "react";
import MiniCTA from "@/components/CTA/MiniCTA";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <MiniCTA />
    </div>
  );
}

export default AuraFooter;
