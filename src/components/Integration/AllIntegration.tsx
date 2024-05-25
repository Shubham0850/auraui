import React from "react";
import ComponentWrapper from "../Theme/ComponentWrapper";
import SeamLess from "@/pages/preview/integration/seamless";

const AllIntegration = () => {
  return (
    <div>
      <ComponentWrapper
        title="Seamless Integration"
        previewLink="/components/integration/Elements#seamless-integration"
      >
        <SeamLess/>
      </ComponentWrapper>
    </div>
  );
};

export default AllIntegration;
