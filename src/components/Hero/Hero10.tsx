import React, { useState } from "react";

function Hero10() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <header className="absolute inset-x-0 top-0 z-10 py-4 bg-transparent sm:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10 md:flex">
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                {" "}
                Features{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                {" "}
                Support{" "}
              </a>
            </div>
          </nav>

          {expanded && (
            <nav>
              <div className="px-1 pt-8 pb-4">
                <div className="grid gap-y-6">
                  <a
                    href="#"
                    title=""
                    className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                  >
                    {" "}
                    Features{" "}
                  </a>
                  <a
                    href="#"
                    title=""
                    className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                  <a
                    href="#"
                    title=""
                    className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white"></div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="flex items-end px-4 pb-16 bg-white pt-28 sm:px-6 lg:px-8 lg:pb-24 xl:pr-12">
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="text-5xl sm:text-6xl lg:text-7xl">⚡️</p>
              <h1 className="mt-10 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                We write articles on SaaS startup growth.
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="#"
                  title=""
                  className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Read Exclusive Blog
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-end px-4 py-16 bg-gray-900 sm:px-6 lg:pb-24 lg:px-8 xl:pl-12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/grid-pattern.svg"
                alt=""
              />
            </div>

            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <p className="text-lg font-bold text-white">Featured Articles</p>

              <div className="mt-6 space-y-5">
                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="#" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cover"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-1.png"
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          <a href="#" title="" className="">
                            {" "}
                            Growth{" "}
                          </a>
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          <a href="#" title="" className="">
                            {" "}
                            How a visual artist redefines success in graphic
                            design{" "}
                          </a>
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="#" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cover"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-2.png"
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          <a href="#" title="" className="">
                            {" "}
                            Growth{" "}
                          </a>
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          <a href="#" title="" className="">
                            {" "}
                            How a visual artist redefines success in graphic
                            design{" "}
                          </a>
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="#" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cover"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-3.png"
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          <a href="#" title="" className="">
                            {" "}
                            Growth{" "}
                          </a>
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          <a href="#" title="" className="">
                            {" "}
                            How a visual artist redefines success in graphic
                            design{" "}
                          </a>
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero10;
