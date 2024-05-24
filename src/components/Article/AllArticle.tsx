import React from "react";
import Link from "next/link";
import AuraArticle from "./AuraArticle";

const AllArticle = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">AuraArticle Component</h3>
          <Link href={"/components/article/Elements#auraarticle"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <AuraArticle />
      </div>
    </div>
  );
};

export default AllArticle;
