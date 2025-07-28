import React from "react";
import CTA3 from "@/components/CTA/Cta3";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <CTA3 />
    </div>
  );
}

export default AuraFooter;
