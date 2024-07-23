import React from "react";
import SmallContactForm from "@/components/Contact/SmallContactForm";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <SmallContactForm />
    </div>
  );
}

export default AuraFooter;
