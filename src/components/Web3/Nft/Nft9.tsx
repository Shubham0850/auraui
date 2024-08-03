import React from "react";

function Nft9() {
  return (
    <div className="relative bg-gradient-to-r pt-12 pb-96 from-[#FEF6E0] to-[#FFFFF4] sm:pt-16 md:py-20 xl:py-24">
      <div className="absolute inset-0 hidden md:block">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/4/background.png"
          alt=""
        />
      </div>
      <div className="absolute inset-0 md:hidden">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/4/background-mobile.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex">
          <div className="w-2/3 md:w-1/3">
            <p className="text-base font-semibold tracking-wide text-gray-500 uppercase">
              Rare NFT collection
            </p>
            <h1 className="mt-10 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
              Make💪 Collect & Sell
            </h1>
            <div className="mt-8 sm:mt-12">
              <a
                href="#"
                title=""
                className="flex items-center text-lg font-bold text-gray-900"
              >
                <div className="w-12 h-0.5 shrink-0 mr-3 bg-rose-500"></div>
                Explore NFTs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nft9;
