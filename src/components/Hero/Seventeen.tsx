import React from "react";

type Props = {};

function Seventeen({}: Props) {
  return (
    <div>
      <header className="py-4 bg-white sm:py-5" x-data="{expanded: false}">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="">
                <img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Products
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Features
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Pricing
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Support
              </a>
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                role="button"
              >
                Start free trial
              </a>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
              >
                <span x-show="!expanded" aria-hidden="true">
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
                      stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
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
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 overflow-hidden bg-white sm:py-16 lg:pb-20 xl:pb-48">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl sm:tracking-tight">
                Copy, Paste & Ship Website in Minutes.
              </h1>
              <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                Clarity gives you the blocks & components you need to create a
                truly professional website, landing page or admin panel for
                SaaS.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  role="button"
                >
                  Build your first website in Webflow
                </a>
              </div>

              <ul className="mt-10 space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Get unlimited design blocks.
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Build website in less than 5 minutes.
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Made for Webflow developers.
                </li>
              </ul>
            </div>

            <div>
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-y-0 w-screen translate-y-20 left-1/2 bg-blue-50 lg:left-32 lg:right-0"></div>

                <img
                  className="relative object-cover w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/3/portrait-male.png"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 origin-bottom-left scale-75 bg-gray-900 rounded-br-none sm:-translate-x-16 xl:-translate-x-24 rounded-2xl sm:scale-100">
                  <svg
                    className="absolute w-auto h-10 text-blue-600 -translate-x-5 -translate-y-4"
                    viewBox="0 0 44 38"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M44 38H27.1765C25.6975 31.574 24.958 25.8894 24.958 20.9463C24.958 6.98212 31.2437 0 43.8151 0V8.1561C37.8992 8.1561 34.9412 11.3691 34.9412 17.7951V22.0585H44V38ZM19.042 38H2.21849C0.739496 31.574 0 25.8894 0 20.9463C0 6.98212 6.28571 0 18.8571 0V8.1561C12.9412 8.1561 9.98319 11.3691 9.98319 17.7951V22.0585H19.042V38Z" />
                  </svg>

                  <div className="px-4 py-5 sm:p-6">
                    <blockquote>
                      <p className="text-base font-normal leading-6 text-white">
                        You made it so simple. Our new site is so much faster
                        and easier to work with than my old site. I just choose
                        the page, make the change and it's done.
                      </p>
                    </blockquote>
                    <p className="mt-4 text-base font-semibold text-white">
                      Ralph Edwards
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-400">
                      CEO - Brain360
                    </p>
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

export default Seventeen;
