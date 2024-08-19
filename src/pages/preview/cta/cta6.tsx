import React from "react";
import OneLinerCTA from "@/components/CTA/Cta6";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <OneLinerCTA />
    </div>
  );
}

export default AuraFooter;
