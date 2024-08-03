import React from "react";

function Pricing4() {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute bottom-0 right-0 transform translate-x-20 translate-y-80">
        <svg
          className="blur-3xl filter"
          style="filter: blur(64px)"
          width="568"
          height="479"
          viewBox="0 0 568 479"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M210.729 388.084C89.6366 364.321 -24.7027 479.376 5.94288 323.207C36.5884 167.039 403.272 -21.7112 524.365 2.05113C645.457 25.8135 475.103 253.09 444.457 409.259C413.811 565.427 331.821 411.846 210.729 388.084Z"
            fill="url(#f)"
          />
          <defs>
            <linearGradient
              id="f"
              x1="663.766"
              y1="168.785"
              x2="303.65"
              y2="469.667"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" style="stop-color: var(--color-cyan-500)" />
              <stop offset="100%" style="stop-color: var(--color-purple-500)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto md:mx-0 md:max-w-3xl">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-sm font-normal tracking-widest uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                {" "}
                Choose a subscription{" "}
              </span>
            </p>
            <h2 className="mt-6 text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
              Get Premium Access
            </h2>
            <p className="mt-6 text-lg font-normal text-gray-400 sm:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 sm:mt-16 lg:mt-20">
            <div className="overflow-hidden bg-white rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="billingType"
                    id="monthlyBilling"
                    className="w-8 h-8 text-purple-500 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex-1 ml-5 shrink-0">
                    <p className="text-xl font-semibold text-black">
                      $29/month
                    </p>
                    <label
                      for="monthlyBilling"
                      className="mt-1 text-base font-normal text-gray-600"
                    >
                      {" "}
                      Simple monthly billing{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-lg">
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="billingType"
                      id="yearlyBilling"
                      className="w-8 h-8 text-purple-500 border-gray-300 focus:ring-purple-500"
                    />
                    <div className="flex-1 ml-5 shrink-0">
                      <p className="text-xl font-semibold text-black">
                        $19/month
                      </p>
                      <label
                        for="yearlyBilling"
                        className="mt-1 text-base font-normal text-gray-600"
                      >
                        {" "}
                        $228 billed in a year{" "}
                      </label>
                    </div>
                  </div>

                  <div className="relative ml-4">
                    <div className="absolute rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 -inset-px"></div>
                    <div className="relative px-2 pt-0.5 pb-1 bg-white rounded-md">
                      <span className="text-xs leading-none tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                        {" "}
                        Save 20%{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150"
              >
                Start A 30 Days Free Trial
              </button>
            </div>
          </div>

          <p className="mt-6 text-base font-normal text-center text-gray-500 md:text-left">
            Confused?{" "}
            <a href="#" title="" className="text-white hover:underline">
              Check all features
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing4;
