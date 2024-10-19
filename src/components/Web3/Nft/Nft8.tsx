import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Nft8() {
  return (
    <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-36">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://www.auraui.com/images/squarebg.png"
          alt="Background"
        />
      </div>
      <div className="absolute inset-0 hidden lg:block">
        <img
          className="object-cover w-full h-full"
          src="https://www.auraui.com/images/3d-objects.png"
          alt="3D Objects"
        />
      </div>

      {/* Content */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex">
          <div className="max-w-md mx-auto text-center lg:w-1/2 lg:max-w-none lg:mx-0 lg:text-left">
            <h1 className="text-4xl font-bold text-white uppercase sm:text-5xl xl:text-6xl">
              Find, buy & Sell
            </h1>
            <p className="max-w-sm mx-auto mt-6 text-lg font-normal text-gray-200 sm:text-xl lg:mx-0">
              More than 500++ artworks available for auction. Get your NFT now.
            </p>

            {/* Buttons */}
            <div className="flex flex-col justify-center mt-10 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 bg-transparent border rounded-md border-rose-400 text-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 hover:bg-rose-400 hover:text-white"
              >
                Explore Nfts
                <HiArrowRight className="w-5 h-5 ml-2" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 bg-transparent border rounded-md border-teal-400 text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 hover:bg-teal-400 hover:text-white"
              >
                Check authors
                <HiArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 mt-12 lg:mt-24 gap-x-8">
              <div className="flex flex-col lg:items-center lg:flex-row lg:space-x-3">
                <p className="text-4xl font-bold text-white">69</p>
                <p className="mt-2 text-sm font-medium text-gray-400 lg:mt-0">
                  Talented <br className="hidden lg:block" />
                  Artists
                </p>
              </div>
              <div className="flex flex-col lg:items-center lg:flex-row lg:space-x-3">
                <p className="text-4xl font-bold text-white">6969+</p>
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
