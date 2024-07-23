import React from "react";
import ConnectionCTA from "@/components/CTA/ConnectionCTA";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <ConnectionCTA />
    </div>
  );
}

export default AuraFooter;
