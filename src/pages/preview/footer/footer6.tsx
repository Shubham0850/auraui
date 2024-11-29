import React from "react";
import Footer6 from "@/components/Footer/Footer6";

type Props = {};

function FooterPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer6 />
    </div>
  );
}

export default FooterPage;
