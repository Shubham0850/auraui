import React from "react";

type Props = {};

const Four = (props: Props) => {
  return (
    <header className="bg-white ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://www.auraui.com/logo-light.png"
                alt=""
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Features{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Solutions{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Resources{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Pricing{" "}
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Sign up{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Sign in{" "}
            </a>
          </div>
        </nav>

        {/* <!-- xs to lg --> */}
        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
          <a
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
          >
            {" "}
            Features{" "}
          </a>

          <a
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
          >
            {" "}
            Solutions{" "}
          </a>

          <a
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
          >
            {" "}
            Resources{" "}
          </a>

          <a
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
          >
            {" "}
            Pricing{" "}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Four;
