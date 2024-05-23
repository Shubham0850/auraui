import React from "react";

import Link from "next/link";
import PaymentsApp from "./PaymentsApp";
import DevlopmentApp from "./DevlopmentApp";
import AestheticDev from "./AestheticDevApp";
import SimplePayments from "./SimplePayments";
import BuisnessFeature from "./BusinessFeature";

const AllFeatures = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">Features For Payment App</h3>
          <Link href={"/components/feature/Elements#features-for-payments-app"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <PaymentsApp />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            Features for Devlopment App
          </h3>
          <Link
            className=" "
            href={"/components/feature/Elements#features-for-devlopment-app"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <DevlopmentApp />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            Features For Beautiful Dev App
          </h3>
          <Link
            className=" "
            href={"/components/feature/Elements#features-for-beautiful-dev-app"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <AestheticDev />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            Simply Designed Features For Payment App
          </h3>
          <Link
            className=" "
            href={
              "/components/feature/Elements#simply-designed-features-for-payment-app"
            }
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <SimplePayments />
      </div>

      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            Features For Business App
          </h3>
          <Link
            className=" "
            href={"/components/feature/Elements#features-for-business-app"}
          >
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <BuisnessFeature />
      </div>
    </div>
  );
};

export default AllFeatures;
