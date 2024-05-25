import React from "react";
import Link from "next/link";
import ToggleDesign from "./ToggleDesign";
import CardDesign from "./CardDesign";
import SelectionDesign from "./SelectionDesign";
import FourCategoryDesign from "./FourCategoryDesign";
import SingleAccess from "./SingleAccess";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllPricing = () => {
  return (
    <div>
      <ComponentWrapper
        title="Toggle Design"
        previewLink="/components/pricing/Elements#toggle-design"
      >
        <ToggleDesign />
      </ComponentWrapper>
      <ComponentWrapper
        title="Card Design"
        previewLink="/components/pricing/Elements#card-design"
      >
        <CardDesign />
      </ComponentWrapper>
    </div>
  );
};

export default AllPricing;
