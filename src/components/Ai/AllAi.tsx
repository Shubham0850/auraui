import React from "react";
import Ai1 from "./SupportChat";
import Link from "next/link";

const AllSignUp = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            SupportChat Component
          </h3>
          <Link href={"/components/ai/Ai1#supportchat-component"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Ai1 />
      </div>
    </div>
  );
};

export default AllSignUp;
