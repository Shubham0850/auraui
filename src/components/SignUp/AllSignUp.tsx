import React from "react";
import ComponentWrapper from "../Theme/ComponentWrapper";
import SignUpBusiness from "./SignUpBusiness ";

const AllSignUp = () => {
  return (
    <div>
      <ComponentWrapper
        title="Business SignUp"
        previewLink="/components/sign-up/Elements#business-signup-component"
      >
        <SignUpBusiness />
      </ComponentWrapper>
    </div>
  );
};

export default AllSignUp;
