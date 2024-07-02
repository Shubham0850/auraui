import React from "react";
import NeoFooter from "@/components/Footer/NeoFooter";

type Props = {};

function Neo({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <NeoFooter />
    </div>
  );
}

export default Neo;
