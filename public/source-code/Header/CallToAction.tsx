import React from "react";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <header className="bg-black border-b border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://www.auraui.com/logo-dark.png"
                alt=""
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-10">
            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Features{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Solutions{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Resources{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Pricing{" "}
            </a>
          </div>
        </nav>

        {/* <!-- xs to lg --> */}
        <nav className="min-h-screen px-4 py-10 text-center bg-black md:hidden">
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-center mt-10 space-y-2">
            <a
              href="#"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              Features{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              Solutions{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              Resources{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {" "}
              Pricing{" "}
            </a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default CallToAction;
