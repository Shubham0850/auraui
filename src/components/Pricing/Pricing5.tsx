import React from "react";

function Pricing5() {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Choose what you need
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <div className="inline-flex items-center justify-center mt-8 overflow-hidden border border-gray-800 rounded-md sm:mt-12">
            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150"
            >
              Monthly
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black hover:bg-gray-900"
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="relative max-w-md mx-auto mt-12 sm:mt-16 lg:max-w-none">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 lg:-translate-y-8 lg:top-0 left-1/2">
            <svg
              className="blur-3xl filter opacity-70"
              style="filter: blur(64px)"
              width="643"
              height="408"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z"
                fill="url(#a)"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="663.766"
                  y1="168.785"
                  x2="303.65"
                  y2="469.667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" style="stop-color: var(--color-cyan-500)" />
                  <stop
                    offset="100%"
                    style="stop-color: var(--color-purple-500)"
                  />
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

          <div className="relative grid grid-cols-1 border border-gray-900 lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-black sm:p-8">
              <div className="flex-1">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="url(#b)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="url(#c)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="b"
                      x1="5"
                      y1="3"
                      x2="20.8259"
                      y2="4.7817"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: var(--color-cyan-500)"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: var(--color-purple-500)"
                      />
                    </linearGradient>
                    <linearGradient
                      id="c"
                      x1="5"
                      y1="3"
                      x2="20.8259"
                      y2="4.7817"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: var(--color-cyan-500)"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: var(--color-purple-500)"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className="mt-8 text-2xl font-normal text-white">Basic</h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  All the basic features to boost your freelance career
                </p>

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
                  </li>
                </ul>

                <p className="mt-10 text-xl font-normal text-gray-100">
                  Starting from <span className="text-white">$49/month</span>
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-gray-800"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-black border-t border-gray-900 bg-opacity-70 backdrop-blur-lg lg:border-t-0 sm:p-8 lg:border-l">
              <div className="flex-1">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 10V3L4 14H11L11 21L20 10L13 10Z"
                    stroke="url(#d)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="d"
                      x1="4"
                      y1="3"
                      x2="22.0177"
                      y2="5.31824"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: var(--color-cyan-500)"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: var(--color-purple-500)"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                <h3 className="mt-8 text-2xl font-normal text-white">
                  Professional
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  All the basic features to boost your freelance career
                </p>

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
                      500 GB Free Storage{" "}
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
                      20 Agents{" "}
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
                  </li>
                </ul>

                <p className="mt-10 text-xl font-normal text-gray-100">
                  Starting from <span className="text-white">$199/month</span>
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-transparent rounded-md hover:opacity-80"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-black border-t border-gray-900 lg:border-t-0 sm:p-8 lg:border-l">
              <div className="flex-1">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z"
                    stroke="url(#e)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="e"
                      x1="3"
                      y1="3"
                      x2="23.1826"
                      y2="5.92138"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: var(--color-cyan-500)"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: var(--color-purple-500)"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                <h3 className="mt-8 text-2xl font-normal text-white">
                  Exclusive
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  All the basic features to boost your freelance career
                </p>

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
                      2 TB Free Storage{" "}
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
                      Unlimited Agents{" "}
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
                  </li>
                </ul>

                <p className="mt-10 text-xl font-normal text-gray-100">
                  Starting from <span className="text-white">$249/month</span>
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-gray-800"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing5;
