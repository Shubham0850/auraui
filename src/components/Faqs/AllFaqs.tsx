import React from "react";
import QuestBox from "./QuestBox";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllFaqs = () => {
  return (
    <div>
      <ComponentWrapper
        title="QuestBox Component"
        previewLink="/components/faqs/Elements#questbox-faqs-component"
      >
        <QuestBox />
      </ComponentWrapper>
    </div>
  );
};

export default AllFaqs;
