import React, { useState } from "react";
import { FaBars, FaTimes, FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";

const commonButtonStyles =
  "inline-flex items-center justify-center px-4 py-2 text-base font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

const Nft12: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/3/background.png"
          alt="Background"
        />
      </div>

      <header className="relative py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" className="flex items-center">
                <img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="p-1 text-gray-900 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-end md:space-x-12 md:mr-auto md:ml-20">
              <a
                href="#"
                className="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                Apes
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                Dashboard
              </a>
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                className={`${commonButtonStyles} text-white bg-gray-900 border border-gray-800 hover:bg-gray-700`}
                role="button"
              >
                <IoMdWallet className="mr-2" />
                Connect Wallet
              </a>
            </div>
          </nav>

          {expanded && (
            <nav>
              <div className="px-1 py-5">
                <div className="grid gap-y-6">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"
                  >
                    Apes
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className={`${commonButtonStyles} text-white bg-gray-900 border border-gray-800 hover:bg-gray-700`}
                    role="button"
                  >
                    <IoMdWallet className="mr-2" />
                    Connect Wallet
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 uppercase sm:text-5xl lg:text-6xl">
              Welcome to Auraui NFT Collection
            </h1>
            <p className="mt-6 text-lg font-normal text-gray-600 lg:text-xl">
              Auraui presents an exclusive collection of unique NFTs on the
              Ethereum blockchain. Explore and own a piece of digital history.
            </p>

            <div className="flex flex-col px-12 mt-10 space-y-5 sm:px-0 sm:space-y-0 sm:space-x-5 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="#"
                className={`${commonButtonStyles} text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white`}
                role="button"
              >
                <FaDiscord className="mr-2" />
                Join Discord
              </a>
              <a
                href="#"
                className={`${commonButtonStyles} relative text-white bg-gray-900 border border-gray-900 hover:bg-gray-700`}
                role="button"
              >
                <FaExternalLinkAlt className="absolute inset-y-0 left-0 flex items-center pl-4 w-8 h-8" />
                See on Opensea
              </a>
            </div>
          </div>
        </div>
      </section>

      <img
        className="object-bottom w-full h-full mx-auto"
        src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/3/images.png"
        alt="NFT Collection"
      />
    </div>
  );
};

export default Nft12;
