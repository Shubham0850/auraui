import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { BsWallet } from "react-icons/bs";

const commonStyles = {
  link: "text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900",
  button:
    "inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white",
};

const Nft7 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-[#FEF6E0] to-[#FFFFF4] overflow-hidden">
      <div className="absolute bottom-0 right-0 lg:inset-y-0 md:-right-16">
        <img
          src="https://www.auraui.com/memeimage/background-pattern.png"
          alt="Background Pattern"
        />
      </div>

      <header className="relative py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" className="flex items-center">
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
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
                  <AiOutlineClose className="w-6 h-6" />
                ) : (
                  <AiOutlineMenu className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <a href="#" className={commonStyles.link}>
                About
              </a>
              <a href="#" className={commonStyles.link}>
                Our NFTs
              </a>
              <a
                href="#"
                className={`${commonStyles.button} inline-flex items-center justify-center`}
                role="button"
              >
                <BsWallet className="mr-2" />
                Connect Wallet
              </a>
            </div>
          </nav>

          {expanded && (
            <nav className="md:hidden px-1 py-5">
              <div className="grid gap-y-6">
                <a href="#" className={commonStyles.link}>
                  About
                </a>
                <a href="#" className={commonStyles.link}>
                  Our NFTs
                </a>
                <a
                  href="#"
                  className={`${commonStyles.button} inline-flex items-center justify-center`}
                  role="button"
                >
                  <BsWallet className="mr-2" />
                  Connect Wallet
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center max-w-5xl grid-cols-1 mx-auto md:grid-cols-2 md:gap-x-8 lg:gap-x-16 gap-y-12">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl xl:text-6xl">
                Auraui NFT Collection
              </h1>
              <p className="mt-5 text-lg font-medium leading-8 text-gray-600">
                Discover our exclusive NFT collection. Each piece is a unique
                digital collectible on the Ethereum blockchain, offering
                exceptional value and creativity.
              </p>

              <div className="flex items-start max-w-xs mt-12 lg:max-w-none gap-x-16">
                <div>
                  <p className="text-base font-medium text-gray-500">
                    Reserve Price
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    <FaEthereum className="inline-block mr-1" />
                    1.7 ETH
                  </p>
                </div>

                <div>
                  <p className="text-base font-medium text-gray-500">
                    Available
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    89/100
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className={`${commonStyles.button} inline-flex items-center justify-center bg-rose-500 focus:ring-rose-600 hover:bg-rose-600`}
                  role="button"
                >
                  <BsWallet className="mr-2" />
                  Connect Wallet
                </a>
              </div>
            </div>

            <div>
              <img
                className="mx-auto lg:ml-auto w-full sm:max-w-xs rounded-xl"
                src="https://www.auraui.com/web3Images/nft/nft15.jpeg"
                alt="NFT Artwork"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nft7;
