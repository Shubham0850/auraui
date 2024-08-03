import React from "react";

function Pricing8() {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Simple, easy pricing
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 lg:grid-cols-3 xl:gap-8 sm:mt-16 lg:max-w-6xl">
          <div className="flex flex-col p-8 transition-all duration-200 transform bg-gray-900 rounded-md hover:-translate-y-2">
            <div className="flex-1">
              <h3 className="text-lg font-normal text-white">Personal</h3>

              <div className="flex items-end mt-3">
                <p className="text-6xl font-normal text-white">$19</p>
                <p className="ml-1 text-base font-normal text-gray-500">
                  / month
                </p>
              </div>
              <p className="mt-4 text-base font-normal text-gray-400">
                All the basic features to boost your freelance career
              </p>

              <hr className="mt-8 border-gray-800" />

              <ul className="mt-8 space-y-5">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Full Access to Landingfolio{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    100 GB Free Storage{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Unlimited Visitors{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    10 Agents{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Live Chat Support{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <div className="relative flex items-center justify-center mt-8 group">
              <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <button
                className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-gray-900 border border-transparent rounded-md"
                role="button"
              >
                Get 14 Days Free Trial
              </button>
            </div>
          </div>

          <div className="relative flex flex-col p-8 transition-all duration-200 transform bg-gray-900 rounded-md hover:-translate-y-2">
            <div className="absolute rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            <div className="absolute inset-0 bg-gray-900 rounded-md"></div>

            <div className="relative flex-1">
              <h3 className="text-lg font-normal text-white">Professional</h3>

              <div className="flex items-end mt-3">
                <p className="text-6xl font-normal text-white">$49</p>
                <p className="ml-1 text-base font-normal text-gray-500">
                  / month
                </p>
              </div>
              <p className="mt-4 text-base font-normal text-gray-400">
                All the basic features to boost your freelance career
              </p>

              <hr className="mt-8 border-gray-800" />

              <ul className="mt-8 space-y-5">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Full Access to Landingfolio{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    100 GB Free Storage{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Unlimited Visitors{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    10 Agents{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Live Chat Support{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <div className="relative mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150"
              >
                Get 14 Days Free Trial
              </button>
            </div>
          </div>

          <div className="flex flex-col p-8 transition-all duration-200 transform bg-gray-900 rounded-md hover:-translate-y-2">
            <div className="flex-1">
              <h3 className="text-lg font-normal text-white">Business</h3>

              <div className="flex items-end mt-3">
                <p className="text-6xl font-normal text-white">$99</p>
                <p className="ml-1 text-base font-normal text-gray-500">
                  / month
                </p>
              </div>
              <p className="mt-4 text-base font-normal text-gray-400">
                All the basic features to boost your freelance career
              </p>

              <hr className="mt-8 border-gray-800" />

              <ul className="mt-8 space-y-5">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Full Access to Landingfolio{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    100 GB Free Storage{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Unlimited Visitors{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    10 Agents{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                    Live Chat Support{" "}
                  </span>
                  <button className="flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <div className="relative flex items-center justify-center mt-8 group">
              <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <button
                className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-gray-900 border border-transparent rounded-md"
                role="button"
              >
                Get 14 Days Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing8;
