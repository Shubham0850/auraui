import React from "react";
import DownloadOptionCTA from "@/components/CTA/DownloadOptionCTA";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <DownloadOptionCTA />
    </div>
  );
}

export default AuraFooter;
