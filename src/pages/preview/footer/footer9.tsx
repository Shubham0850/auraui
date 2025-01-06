import React from "react";
import Footer9 from "@/components/Footer/Footer9";

type Props = {};

function FooterPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer9 />
    </div>
  );
}

export default FooterPage;
