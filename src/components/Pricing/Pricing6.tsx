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

const iconWrapperStyle = "relative w-12 h-12 shrink-0";
const iconBgStyle =
  "absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse";
const iconStyle =
  "relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-lg";

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
    <section className="relative py-20 overflow-hidden bg-black sm:py-24 lg:py-28">
      {/* Gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/30 blur-[180px] rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-600/30 blur-[180px] rounded-full"></div>
      </div>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="sm:max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Choose a subscription
          </p>
          <h2 className="mt-6 text-4xl font-extrabold text-white sm:mt-8 sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow">
            Invest in AuraUI Today
          </h2>
          <p className="max-w-xl mt-6 text-lg font-normal text-gray-400 sm:mt-8">
            Enhance your digital experience with AuraUI&apos;s premium features.
            Secure, scalable, and designed for modern needs.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative mt-16 lg:mt-20">
          {/* Background glow */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="w-[700px] h-[400px] opacity-50 blur-3xl bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>

          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full opacity-40"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
              alt="Background noise"
            />
          </div>

          <div className="relative overflow-hidden border border-gray-800 rounded-3xl bg-black/70 backdrop-blur-xl shadow-xl">
            <div className="px-10 py-10">
              <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3">
                {/* Features */}
                <div className="lg:pr-16 xl:pr-24 lg:col-span-2">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {features.map(({ Icon, title, description }, index) => (
                      <div className="flex items-start" key={index}>
                        <div className={iconWrapperStyle}>
                          <div className={iconBgStyle}></div>
                          <div className={iconStyle}>
                            <Icon size={22} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-semibold text-white">
                            {title}
                          </p>
                          <p className="mt-1 text-sm text-gray-400">
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider for mobile */}
                <div className="w-48 h-px mx-auto bg-white/10 lg:hidden"></div>

                {/* Pricing & CTA */}
                <div className="text-center lg:border-l lg:pl-16 xl:pl-24 border-white/10">
                  <p className="text-6xl font-extrabold text-white">$99</p>
                  <p className="mt-2 text-base text-gray-400">
                    Lifetime Account
                  </p>
                  <div className="max-w-xs mx-auto mt-8">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:contrast-150 hover:scale-[1.03] shadow-lg"
                    >
                      Buy now <RiArrowRightLine className="ml-2 text-xl" />
                    </button>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
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
