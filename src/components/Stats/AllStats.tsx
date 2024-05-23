import React from "react";
import Link from "next/link";
import MetricsHub from "./MetricsHub";

const AllStats = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">MetricsHub Stats </h3>
          <Link href={"/components/stats/Elements#metricshub-stats"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <MetricsHub/>
      </div>
    </div>
  );
};

export default AllStats;
