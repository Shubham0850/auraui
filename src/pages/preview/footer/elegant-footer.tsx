import React from "react";
import ElegantFooter from "@/components/Footer/ElegantFooter";

type Props = {};

function Elegant({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <ElegantFooter />
    </div>
  );
}

export default Elegant;
