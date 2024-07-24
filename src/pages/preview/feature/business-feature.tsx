import React from "react";
import BusinessFeature from "@/components/Feature/BusinessFeature";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <BusinessFeature />
    </div>
  );
}

export default AuraFooter;
