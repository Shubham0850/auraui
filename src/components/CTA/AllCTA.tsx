import React from "react";
import RoundedDesign from "./RoundedDesign";
import Simple from "./Simple";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllCTA = () => {
  return (
    <div>
      <ComponentWrapper
        title="Simple CTA"
        previewLink="/components/cta/Elements#simple-cta"
      >
        <Simple />
      </ComponentWrapper>
      <ComponentWrapper
        title="Rounded Design"
        previewLink="/components/cta/Elements#rounded-design"
      >
        <RoundedDesign />
      </ComponentWrapper>
    </div>
  );
};

export default AllCTA;
