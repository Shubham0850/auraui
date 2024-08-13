import React from "react";
import {
  MdStorage,
  MdAccountCircle,
  MdApi,
  MdDomain,
  MdChat,
  MdShare,
} from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";

const iconWrapperStyle = "relative w-10 h-10 shrink-0";
const iconBgStyle =
  "absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500";
const iconStyle =
  "relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-base-900 text-white";

const features = [
  {
    Icon: MdStorage,
    title: "Cloud Storage",
    description: "Up to 100GB for projects",
  },
  {
    Icon: MdAccountCircle,
    title: "Unlimited Accounts",
    description: "No limits on account creation",
  },
  { Icon: MdApi, title: "API Access", description: "Create custom solutions" },
  {
    Icon: MdDomain,
    title: "Custom Domain",
    description: "Add your own domain",
  },
  { Icon: MdChat, title: "Live Chat", description: "Connect with customers" },
  {
    Icon: MdShare,
    title: "Share Information",
    description: "Easily share your message",
  },
];

function Pricing6() {
  return (
    <section className="py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="sm:max-w-3xl">
          <p className="text-sm font-normal tracking-widest uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              Choose a subscription
            </span>
          </p>
          <h2 className="mt-6 text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
            Invest in AuraUI Today
          </h2>
          <p className="max-w-xl mt-6 text-lg font-normal text-gray-400 sm:mt-8">
            Enhance your digital experience with AuraUI&apos;s premium features.
            Secure, scalable, and designed for modern needs.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="w-[693px] h-[372px] filter opacity-70 blur-3xl bg-gradient-to-r from-cyan-500 to-purple-500" />
          </div>

          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full opacity-50"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
              alt="Background noise"
            />
          </div>

          <div className="relative overflow-hidden border rounded-2xl bg-base-900 bg-opacity-80 filter backdrop-blur-lg border-base-900">
            <div className="px-10 py-8">
              <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3">
                <div className="lg:pr-16 xl:pr-24 lg:col-span-2">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {features.map(({ Icon, title, description }, index) => (
                      <div className="flex items-center" key={index}>
                        <div className={iconWrapperStyle}>
                          <div className={iconBgStyle}></div>
                          <div className={iconStyle}>
                            <Icon size={20} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-normal text-white">
                            {title}
                          </p>
                          <p className="mt-px text-sm font-normal text-gray-500">
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-48 h-px mx-auto bg-white bg-opacity-10 lg:hidden"></div>

                <div className="text-center border-white lg:border-l lg:pl-16 xl:pl-24 border-opacity-10">
                  <p className="text-6xl font-normal text-white">$ 99</p>
                  <p className="mt-2 text-base font-normal text-gray-400">
                    Lifetime Account
                  </p>
                  <div className="max-w-xs mx-auto mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150"
                      role="button"
                    >
                      Buy now <RiArrowRightLine className="ml-2" />
                    </button>
                  </div>
                  <p className="mt-4 text-sm font-normal text-gray-400">
                    30 Days Money-back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing6;
