import React from "react";
import Link from "next/link";
import VisionaryVanguard from "./VisionaryVanguard";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllTeams = () => {
  return (
    <div>
      <ComponentWrapper
        title="Visionary Vanguard"
        previewLink="/components/teams/Elements#visionary-vanguard-teams"
      >
        <VisionaryVanguard />
      </ComponentWrapper>
    </div>
  );
};

export default AllTeams;
