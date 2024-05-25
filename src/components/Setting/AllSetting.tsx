import React from "react";
import One from "./One";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllSetting = () => {
  return (
    <div>
      <ComponentWrapper
        title="Newsletter Subscription"
        previewLink="/components/setting/Elements#setting-one"
      >
        <One/>
      </ComponentWrapper>
    </div>
  );
};

export default AllSetting;
