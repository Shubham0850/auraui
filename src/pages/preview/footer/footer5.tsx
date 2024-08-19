import React from 'react'
import Footer5 from "@/components/Footer/Footer5";

type Props = {}

function FooterPage({}: Props) {
	return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <Footer5 />
    </div>
  );
}

export default FooterPage