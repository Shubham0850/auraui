import React from "react";
import AuraFooterOne from "./AuraFooterOne";
import SmallFooter from "./SmallFooter";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllFooter = () => {
  return (
    <div>
      <ComponentWrapper
        title="Aura Footer"
        previewLink="/components/footer/Elements#aurafooter-component"
      >
        <AuraFooterOne />
      </ComponentWrapper>
      <ComponentWrapper
        title="Small Footer "
        previewLink="/components/footer/Elements#small-footer-component"
      >
        <SmallFooter />
      </ComponentWrapper>
    </div>
  );
};

export default AllFooter;
