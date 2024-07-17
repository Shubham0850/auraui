import React from "react";

const MetricsHub = () => {
  return (
    <section className="py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:grid-cols-5 gap-y-12 lg:gap-x-16 lg:max-w-none">
          <div className="text-center lg:mx-0 lg:col-span-3 lg:max-w-md lg:text-left">
            <h2 className="px-12 text-3xl font-normal text-white sm:px-0 sm:text-4xl lg:text-5xl xl:text-6xl">
              Numbers are telling our story
            </h2>
            <p className="mt-8 text-lg font-normal text-gray-400">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 transform">
              <svg
                className="filter blur-3xl"
                width="444"
                height="536"
                viewBox="0 0 444 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M225.919 112.719C343.98 64.6648 389.389 -70.487 437.443 47.574C485.497 165.635 253.267 481.381 135.206 529.435C17.1449 577.488 57.9601 339.654 9.90619 221.593C-38.1477 103.532 107.858 160.773 225.919 112.719Z"
                  fill="url(#a)"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="82.7344"
                    y1="550.792"
                    x2="-39.9445"
                    y2="118.965"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      className="stop-color: var(--color-cyan-500)"
                    />
                    <stop
                      offset="100%"
                      className="stop-color: var(--color-purple-500)"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative overflow-hidden text-center bg-black lg:text-left bg-opacity-70 rounded-xl">
              <div className="px-12 py-10">
                <p className="text-5xl font-normal text-white lg:text-6xl">
                  2M+
                </p>
                <p className="mt-3 text-lg font-normal text-gray-400">
                  Tickets Delivered This Month
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>

              <div className="px-12 py-10">
                <p className="text-5xl font-normal text-white lg:text-6xl">
                  46K+
                </p>
                <p className="mt-3 text-lg font-normal text-gray-400">
                  Active Customers Rate
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>

              <div className="px-12 py-10">
                <p className="text-5xl font-normal text-white lg:text-6xl">
                  99%
                </p>
                <p className="mt-3 text-lg font-normal text-gray-400">
                  Customer Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsHub;
