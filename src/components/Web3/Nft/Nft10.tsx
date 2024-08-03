import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const commonStyles = {
  headerLink:
    "text-base font-medium text-gray-300 transition-all duration-200 hover:text-white",
  button:
    "inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-800 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700",
  card: "inline-flex items-center justify-center w-full px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-gray-900",
};

function Nft10() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="relative py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="Auraui" className="flex items-center">
                <img
                  className="w-auto h-8"
                  src="https://your-logo-url.svg"
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
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-end md:space-x-12 md:mr-auto md:ml-20">
              <a href="#" title="About" className={commonStyles.headerLink}>
                About
              </a>
              <a href="#" title="Our NFTs" className={commonStyles.headerLink}>
                Our NFTs
              </a>
              <a href="#" title="Dashboard" className={commonStyles.headerLink}>
                Dashboard
              </a>
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                title="Connect Wallet"
                className={commonStyles.button}
                role="button"
              >
                Connect Wallet
              </a>
            </div>
          </nav>

          {expanded && (
            <nav>
              <div className="px-1 py-5">
                <div className="grid gap-y-6">
                  <a href="#" title="About" className={commonStyles.headerLink}>
                    About
                  </a>
                  <a
                    href="#"
                    title="Our NFTs"
                    className={commonStyles.headerLink}
                  >
                    Our NFTs
                  </a>
                  <a
                    href="#"
                    title="Dashboard"
                    className={commonStyles.headerLink}
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    title="Connect Wallet"
                    className={commonStyles.button}
                    role="button"
                  >
                    Connect Wallet
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center max-w-4xl grid-cols-1 mx-auto xl:max-w-5xl md:grid-cols-2 md:gap-x-24 gap-y-12">
            <div className="max-w-sm mx-auto text-center md:text-left lg:mx-0">
              <div className="flex items-center justify-center space-x-3 md:justify-start">
                <div className="shrink-0 w-6 h-px bg-gray-500"></div>
                <p className="text-lg font-semibold tracking-wide text-gray-500 uppercase">
                  Day 34/1000
                </p>
              </div>
              <h1 className="mt-7 text-8xl sm:text-[140px] font-bold tracking-tight leading-[0.85]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-teal-700">
                  {" "}
                  Auraui
                  <br />
                  NFTs{" "}
                </span>
              </h1>
              <p className="mt-10 text-lg font-normal text-gray-100">
                Auraui presents an exclusive collection of unique NFTs that
                embody the spirit of innovation and creativity on the Ethereum
                blockchain.
              </p>
            </div>

            <div>
              <div className="max-w-xs mx-auto md:ml-auto md:mr-0">
                <img
                  className="object-cover w-full h-full rounded-xl"
                  src="https://your-image-url.png"
                  alt="NFT Preview"
                />
                <div className="flex items-start max-w-xs mt-6 lg:max-w-none gap-x-16">
                  <div>
                    <p className="text-base font-medium text-gray-500">
                      Current Bid
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      Ξ 1.7 ETH
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-500">
                      Bid Ends In
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      12h:39m:41s
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    title="Bid on Opensea"
                    className={commonStyles.card}
                    role="button"
                  >
                    <HiOutlineExternalLink className="mr-2" /> Bid on Opensea
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nft10;
