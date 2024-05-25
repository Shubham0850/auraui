import React from "react";
import PaymentsApp from "./PaymentsApp";
import DevlopmentApp from "./DevlopmentApp";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllFeatures = () => {
  return (
    <div>
      <ComponentWrapper
        title="Features for Payments App"
        previewLink="/components/feature/Elements#features-for-payments-app"
      >
        <PaymentsApp />
      </ComponentWrapper>
      <ComponentWrapper
        title="Features for Development App"
        previewLink="/components/feature/Elements#features-for-devlopment-app"
      >
        <DevlopmentApp />
      </ComponentWrapper>
    </div>
  );
};

export default AllFeatures;
