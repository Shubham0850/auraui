import React from "react";
import Contact5 from "@/components/Contact/Contact5";

type Props = {};

function ContactPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Contact5 />
    </div>
  );
}

export default ContactPage;
