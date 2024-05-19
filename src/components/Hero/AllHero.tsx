import React from "react";
import CourseHero from "./Course";
import BlogComponent from "./Blog";
import EmailCampaignHero from "./EmailCampaign";
import FeedbackHero from "./Feedback";
import Link from "next/link";

const AllHero = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Course Hero </h3>
          <Link href={"/components/Hero/Elements#coursehero-component"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <CourseHero />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Blog Hero </h3>
          <Link className=" " href={"/components/Hero/Elements#blog-hero"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <BlogComponent />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Email Campaign Hero</h3>
          <Link
            className=" "
            href={"/components/Hero/Elements#emailcampaign-hero"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <EmailCampaignHero />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">FeedBack Hero</h3>
          <Link
            className=" "
            href={"/components/Hero/Elements#feedback-hero"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <FeedbackHero />
      </div>
    </div>
  );
};

export default AllHero;
