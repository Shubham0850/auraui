import React from 'react'
import SmallFooter from "@/components/Footer/SmallFooter";

type Props = {}

function Small({}: Props) {
	return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <SmallFooter />
    </div>
  );
}

export default Small