import React from "react";
import Link from "next/link";
import AuraArticle from "./AuraArticle";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllArticle = () => {
  return (
    <div>
      <ComponentWrapper
        title="Aura Article"
        previewLink="/components/article/Elements#auraarticle"
      >
        <AuraArticle />
      </ComponentWrapper>
    </div>
  );
};

export default AllArticle;
