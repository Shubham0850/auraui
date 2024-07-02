import React from "react";
import MinimalFooter from "@/components/Footer/MinimalFooter";

type Props = {};

function Minimal({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <MinimalFooter />
    </div>
  );
}

export default Minimal;
