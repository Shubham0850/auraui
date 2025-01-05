import React from "react";
import Footer8 from "@/components/Footer/Footer8";

type Props = {};

function FooterPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer8 />
    </div>
  );
}

export default FooterPage;
