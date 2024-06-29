import React from "react";
import FusionFooter from "@/components/Footer/FusionFooter";

type Props = {};

function Fusion({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <FusionFooter />
    </div>
  );
}

export default Fusion;
