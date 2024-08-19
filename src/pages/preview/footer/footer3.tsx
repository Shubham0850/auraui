import React from "react";
import Footer3 from "@/components/Footer/Footer3";

type Props = {};

function FooterPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer3 />
    </div>
  );
}

export default FooterPage;
