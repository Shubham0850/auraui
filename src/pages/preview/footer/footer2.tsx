import React from "react";

import Footer2 from "@/components/Footer/Footer2";

type Props = {};

function FooterPage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer2 />
    </div>
  );
}

export default FooterPage;
