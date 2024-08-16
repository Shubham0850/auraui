import React from "react";
import Contact3 from "@/components/Contact/Contact3";

type Props = {};

function ContactPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Contact3 />
    </div>
  );
}

export default ContactPage;
