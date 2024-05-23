import React from "react";

import Link from "next/link";
import Designers from "./Designers";
import Devlopers from "./Devlopers";
import Buisness from "./Buisness";
import Devs from "./Devs";
import Jobs from "./Jobs";

const AllTestimonial = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            Testimonial for Designers
          </h3>
          <Link
            href={"/components/testimonial/Elements#testimonial-for-designers"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Designers />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            Testimonial for Devlopers
          </h3>
          <Link
            className=" "
            href={"/components/testimonial/Elements#testimonial-for-devlopers"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Devlopers />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            Second Devlopers Testimonial
          </h3>
          <Link
            className=" "
            href={
              "/components/testimonial/Elements#second-devlopers-testimonial"
            }
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Devs />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Testimonial for Jobs</h3>
          <Link
            className=" "
            href={"/components/testimonial/Elements#testimonial-for-jobs"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Jobs />
      </div>

      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Buisness Testimonial</h3>
          <Link
            className=" "
            href={"/components/testimonial/Elements#buisness-testimonial"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Buisness />
      </div>
    </div>
  );
};

export default AllTestimonial;
