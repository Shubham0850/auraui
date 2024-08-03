import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineWallet } from "react-icons/ai";

const commonStyles = {
  link: "text-base font-medium text-gray-300 transition-all duration-200 hover:text-white",
  button:
    "inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-800 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700",
};

function Nft11() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/background.png"
          alt="Background"
        />
      </div>

      <header className="relative py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="Auraui" className="flex items-center">
                <img
                  className="w-auto h-8"
                  src="https://auraui.com/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="p-1 text-gray-200 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-gray-900 focus:ring-offset-2"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <a href="#" title="About Auraui" className={commonStyles.link}>
                About
              </a>
              <a href="#" title="Auraui Apes" className={commonStyles.link}>
                Apes
              </a>
              <a
                href="#"
                title="Auraui Dashboard"
                className={commonStyles.link}
              >
                Dashboard
              </a>
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                title="Connect Wallet"
                className={commonStyles.button}
              >
                <AiOutlineWallet className="mr-2" /> Connect Wallet
              </a>
            </div>
          </nav>

          {expanded && (
            <nav>
              <div className="px-1 py-5">
                <div className="grid gap-y-6">
                  <a
                    href="#"
                    title="About Auraui"
                    className={commonStyles.link}
                  >
                    About
                  </a>
                  <a href="#" title="Auraui Apes" className={commonStyles.link}>
                    Apes
                  </a>
                  <a
                    href="#"
                    title="Auraui Dashboard"
                    className={commonStyles.link}
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    title="Connect Wallet"
                    className={commonStyles.button}
                  >
                    <AiOutlineWallet className="mr-2" /> Connect Wallet
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center max-w-6xl grid-cols-1 mx-auto lg:grid-cols-2 gap-x-24 gap-y-12">
            <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:mx-0 lg:order-last">
              <h1 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">
                New funny human every day, till 1000th day.
              </h1>
              <p className="max-w-md mx-auto mt-5 text-lg font-normal text-gray-400 lg:mx-0 lg:text-xl lg:leading-9 lg:mt-8">
                Auraui presents a unique collection of digital NFTs -
                one-of-a-kind collectibles living on the Ethereum blockchain.
              </p>
              <div className="mt-8 sm:mt-12 lg:mt-16">
                <a
                  href="#"
                  title="View on Opensea"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-gray-900"
                >
                  See on Opensea
                </a>
              </div>
            </div>

            <div>
              <div className="grid max-w-md grid-cols-2 gap-6 mx-auto lg:max-w-none lg:mx-0">
                <img
                  className="object-cover w-full h-full mx-auto rounded-lg"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-1.png"
                  alt="NFT 1"
                />
                <img
                  className="object-cover w-full h-full mx-auto rounded-lg"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-2.png"
                  alt="NFT 2"
                />
                <img
                  className="object-cover w-full h-full mx-auto transform rounded-lg rotate-3"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-4.png"
                  alt="NFT 3"
                />
                <img
                  className="object-cover w-full h-full mx-auto rounded-lg"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-3.png"
                  alt="NFT 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nft11;
