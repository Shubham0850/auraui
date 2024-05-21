import React from "react";
import Link from "next/link";
import ToggleDesign from "./ToggleDesign";
import CardDesign from "./CardDesign";
import SelectionDesign from "./SelectionDesign";
import FourCategoryDesign from "./FourCategoryDesign";
import SingleAccess from "./SingleAccess";

const AllPricing = () => {
  return (
    <div className="space-y-10 pt-10">
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Toggle Design</h3>
          <Link href={"/components/Pricing/Elements#toggle-design"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <ToggleDesign />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Card Design</h3>
          <Link href={"/components/Pricing/Elements#card-design"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <CardDesign />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Selection Design</h3>
          <Link href={"/components/Pricing/Elements#selection-design"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <SelectionDesign />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">
            Four Category Pricing Section
          </h3>
          <Link
            href={"/components/Pricing/Elements#four-category-pricing-section"}
          >
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <FourCategoryDesign />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Single Access</h3>
          <Link href={"/components/Pricing/Elements#single-access"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <SingleAccess />
      </div>
    </div>
  );
};

export default AllPricing;
