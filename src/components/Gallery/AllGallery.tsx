import React from "react";
import ComponentWrapper from "../Theme/ComponentWrapper";
import ShowCase from "@/pages/preview/gallery/showcase";

const AllGallery = () => {
  return (
    <div>
      <ComponentWrapper
        title="Showcase Gallery"
        previewLink="/components/gallery/Elements#showcase-gallery"
      >
        <ShowCase />
      </ComponentWrapper>
    </div>
  );
};

export default AllGallery;
