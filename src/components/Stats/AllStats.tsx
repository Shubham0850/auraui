import React from "react";
import MetricsHub from "./MetricsHub";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllStats = () => {
  return (
    <div>
      <ComponentWrapper
        title="MetricsHub"
        previewLink="/components/stats/Elements#metricshub-stats"
      >
        <MetricsHub />
      </ComponentWrapper>
    </div>
  );
};

export default AllStats;
