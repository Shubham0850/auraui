import React from 'react'
import AuraFooterOne from "@/components/Footer/AuraFooterOne";

type Props = {}

function AuraFooter({}: Props) {
	return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <AuraFooterOne/>
    </div>
  );
}

export default AuraFooter