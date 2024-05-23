import React from "react";
import Link from "next/link";
import QuestBox from "./QuestBox";

const AllFaqs = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">QuestBox FAQs </h3>
          <Link href={"/components/faqs/Elements#questbox-faqs-component"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <QuestBox />
      </div>
    </div>
  );
};

export default AllFaqs;
