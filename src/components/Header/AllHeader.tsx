import React from "react";
import ComponentWrapper from "../Theme/ComponentWrapper";
import Authentication from "./Authentication";
import CallToAction from "./CallToAction";
import UserAccount from "./UserAccount";
import Simple from "./Simple";

const AllHeader = () => {
  return (
    <div>
      <ComponentWrapper
        title="Simple Header"
        previewLink="/components/header/Elements#simple-header"
      >
        <Simple />
      </ComponentWrapper>
      <ComponentWrapper
        title="UserAccount Header"
        previewLink="/components/header/Elements#user-account-navbar"
      >
        <UserAccount />
      </ComponentWrapper>
      <ComponentWrapper
        title="Call-to-Action Header"
        previewLink="/components/header/Elements#call-to-action-navbar"
      >
        <CallToAction />
      </ComponentWrapper>
      <ComponentWrapper
        title="Authentication Header"
        previewLink="/components/header/Elements#authentication-navbar"
      >
        <Authentication />
      </ComponentWrapper>
    </div>
  );
};

export default AllHeader;
