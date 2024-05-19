import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Link from "next/link";

const AllHeader = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Simple Header</h3>
          <Link
            className=" "
            href={
              "http://auraui.com/components/Header/Elements#simple-header"
            }
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <One />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">User Account Navbar</h3>
          <Link
            className=" "
            href={
              "http://auraui.com/components/Header/Elements#user-account-navbar"
            }
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Two />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Call-to-Action Navbar</h3>
          <Link
            className=" "
            href={
              "http://auraui.com/components/Header/Elements#call-to-action-navbar"
            }
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Three />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Authentication Navbar</h3>
          <Link
            className=" "
            href={
              "http://auraui.com/components/Header/Elements#authentication-navbar"
            }
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Four />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Promotional Navbar</h3>
          <Link
            className=" "
            href={
              "http://auraui.com/components/Header/Elements#promotional-navbar"
            }
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Five />
      </div>
    </div>
  );
};

export default AllHeader;
