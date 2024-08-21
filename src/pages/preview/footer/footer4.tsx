import React from "react";
import Footer4 from "@/components/Footer/Footer4";

type Props = {};

function FooterPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer4 />
    </div>
  );
}

export default FooterPage;
