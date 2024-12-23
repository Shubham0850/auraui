import React from "react";
import Footer7 from "@/components/Footer/Footer7";

type Props = {};

function FooterPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer7 />
    </div>
  );
}

export default FooterPage;
