import React from "react";
import Link from "next/link";
import GetInTouch from "./GetInTouch";
import SquareDesign from "./SquareDesign";
import RoundedDesign from "./RoundedDesign";
import Simple from "./Simple";
import MobileApp from "./MobileApp";

const AllCTA = () => {
  return (
    <div className="space-y-10 pt-10">
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Mobile App</h3>
          <Link href={"/components/cta/Elements#mobile-app"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <MobileApp />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Simple</h3>
          <Link href={"/components/CTA/Elements#simple-app"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Simple />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Rounded Design</h3>
          <Link href={"/components/CTA/Elements#rounded-design"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <RoundedDesign />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Square Design</h3>
          <Link href={"/components/CTA/Elements#square-design"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <SquareDesign />
      </div>
      <div>
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium">Get In Touch</h3>
          <Link href={"/components/CTA/Elements#get-in-touch"}>
            <button className="py-1 px-2 font-semibold rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default AllCTA;
