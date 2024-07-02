import React from "react";
import LiteFooter from "@/components/Footer/LiteFooter";

type Props = {};

function Lite({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <LiteFooter />
    </div>
  );
}

export default Lite;
