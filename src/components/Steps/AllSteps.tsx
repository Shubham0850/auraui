import React from "react";
import Link from "next/link";
import VerticleSteps from "./VerticleSteps";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllSteps = () => {
  return (
    <div>
      <ComponentWrapper
        title="Vertical Steps"
        previewLink="/components/steps/Elements#verticlesteps-component"
      >
        <VerticleSteps />
      </ComponentWrapper>
    </div>
  );
};

export default AllSteps;
