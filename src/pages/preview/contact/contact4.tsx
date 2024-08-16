import React from "react";
import Contact4 from "@/components/Contact/Contact4";

type Props = {};

function ContactPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Contact4 />
    </div>
  );
}

export default ContactPage;
