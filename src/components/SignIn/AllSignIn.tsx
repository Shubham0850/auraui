import React from "react";
import ComponentWrapper from "../Theme/ComponentWrapper";
import LoginCard from "./LoginCard";

const AllSignIn = () => {
  return (
    <div>
      <ComponentWrapper
        title="LoginCard Component"
        previewLink="/components/sign-in/Elements#logincard-component"
      >
        <LoginCard />
      </ComponentWrapper>
    </div>
  );
};

export default AllSignIn;
