import React from 'react'
import Footer1 from "@/components/Footer/Footer1";

type Props = {}

function FooterPage({}: Props) {
	return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer1/>
    </div>
  );
}

export default FooterPage