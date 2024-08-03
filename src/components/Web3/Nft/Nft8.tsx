import React from "react";

function Nft8() {
  return (
    <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/3/background.png"
          alt=""
        />
      </div>
      <div className="absolute inset-0 hidden lg:block">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/3/3d-objects.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex">
          <div className="max-w-md mx-auto text-center lg:w-1/2 lg:max-w-none lg:mx-0 lg:text-left">
            <h1 className="text-4xl font-bold text-white uppercase sm:text-5xl xl:text-6xl">
              Discover, Collect & Sell
            </h1>
            <p className="max-w-sm mx-auto mt-6 text-lg font-normal text-gray-200 sm:text-xl lg:mx-0">
              More than 3,500 artworks available for auction. Get your NFT now.
            </p>
            <div className="flex flex-col justify-center px-16 mt-10 space-y-5 sm:px-0 sm:items-center sm:space-x-5 sm:flex-row lg:justify-start sm:space-y-0">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 bg-transparent border rounded-md border-rose-400 focus:outline-none text-rose-400 focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 hover:bg-rose-400 hover:text-white"
                role="button"
              >
                Explore artworks
                <svg
                  className="w-5 h-5 ml-2 -mr-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold tracking-widest text-teal-400 uppercase transition-all duration-200 bg-transparent border border-teal-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 hover:bg-teal-400 hover:text-white"
                role="button"
              >
                Check authors
                <svg
                  className="w-5 h-5 ml-2 -mr-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div className="inline-grid grid-cols-2 mt-12 lg:mt-24 xl:mt-40 gap-x-8">
              <div className="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                <p className="text-4xl font-bold text-white">692</p>
                <p className="mt-2 text-sm font-medium text-gray-400 lg:mt-0">
                  Talented <br className="hidden lg:block" />
                  Artists
                </p>
              </div>

              <div className="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                <p className="text-4xl font-bold text-white">3,570+</p>
                <p className="mt-2 text-sm font-medium text-gray-400 lg:mt-0">
                  NFT <br className="hidden lg:block" />
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nft8;
