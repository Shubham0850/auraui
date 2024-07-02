import React from "react";
import QuickFooter from "@/components/Footer/QuickFooter";

type Props = {};

function Quick({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <QuickFooter />
    </div>
  );
}

export default Quick;
