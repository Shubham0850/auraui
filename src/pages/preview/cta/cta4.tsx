import React from "react";
import ExploreDataCTA from "@/components/CTA/Cta4";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <ExploreDataCTA />
    </div>
  );
}

export default AuraFooter;
