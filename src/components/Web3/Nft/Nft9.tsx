import React from "react";

function Nft9() {
  return (
    <div className="relative bg-gradient-to-r pt-12 pb-96 from-[#2c2615] to-[#12a73e] sm:pt-16 md:py-20 xl:py-24">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="w-2/3 md:w-1/3">
            <p className="text-base font-semibold tracking-wide text-gray-100 uppercase">
              Rare NFT Collection
            </p>
            <h1 className="mt-10 text-5xl font-bold text-gray-100 sm:text-6xl lg:text-7xl xl:text-8xl">
              Create 💪 & Sell
            </h1>
            <div className="mt-8 sm:mt-12">
              <a
                href="#"
                title="Explore NFTs"
                className="flex items-center text-lg font-bold text-gray-100"
              >
                <div className="w-12 h-0.5 shrink-0 mr-3 bg-rose-500"></div>
                Explore NFTs
              </a>
            </div>
            <p className="mt-4 text-gray-200">
              At Auraui, we empower creators to unleash their creativity and
              engage with a vibrant community of NFT enthusiasts. Join us in
              revolutionizing the digital art landscape!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[500px] rounded-lg shadow-lg"
              src="https://www.auraui.com/web3Images/nft/nft12.png"
              alt="NFT Example"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nft9;
