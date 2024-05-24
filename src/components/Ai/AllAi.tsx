import React from "react";
import SupportChat from "./SupportChat";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllAi = () => {
  return (
    <div>
      <ComponentWrapper
        title="Support Chat"
        previewLink="/components/ai/support-chat#supportchat-component"
      >
        <SupportChat />
      </ComponentWrapper>
    </div>
  );
};

export default AllAi;
