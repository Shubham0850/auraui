import React from "react";

type Props = {};

const five = (props: Props) => {
  return (
    <section className="relative py-10 overflow-hidden bg-blue-600 sm:py-16 lg:py-24">
      <div className="absolute bottom-0 right-0 -mb-48 md:inset-y-0">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/pricing/8/lines.svg"
          alt=""
        />
      </div>

      <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-end grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Join 35k+ web devs & build your next website fast
            </h2>
            <p className="mt-6 text-base leading-relaxed text-blue-100">
              Amet minim mollit non deserunt ullam co est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="mt-12 space-y-4 md:mt-20">
              <li className="flex items-center space-x-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white"> Domain </span>
              </li>

              <li className="flex items-center space-x-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  {" "}
                  120+ Coded Blocks{" "}
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  {" "}
                  Unlimited Exports{" "}
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  {" "}
                  Design Files Included{" "}
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">
                  {" "}
                  Commercial License{" "}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:px-12">
            <div className="overflow-hidden text-center bg-white rounded-md shadow-md">
              <div className="px-12 py-10">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-rose-400">
                  Full Pack
                </h3>
                <p className="mt-4 text-6xl font-bold text-black">$79</p>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-4 py-4 mt-10 font-semibold text-white transition-all duration-200 rounded-full bg-rose-400 hover:bg-rose-500 focus:bg-rose-500"
                  role="button"
                >
                  Get full access
                  <svg
                    className="w-5 h-5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <div className="flex items-center justify-center mt-5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500">
                    {" "}
                    14 Days Moneyback Guarantee{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default five;
