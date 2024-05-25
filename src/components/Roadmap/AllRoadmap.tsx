import React from "react";
import ComponentWrapper from "../Theme/ComponentWrapper";
import Project from "./Project";

const AllRoadmap = () => {
  return (
    <div>
      <ComponentWrapper
        title="Project Roadmap"
        previewLink="/components/roadmap/Elements#projectroadmap"
      >
        <Project />
      </ComponentWrapper>
    </div>
  );
};

export default AllRoadmap;
