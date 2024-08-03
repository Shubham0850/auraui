import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { MdExplore } from "react-icons/md";

const commonButtonClasses =
  "inline-flex items-center justify-center px-4 py-2 text-base font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
const commonLinkClasses =
  "text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900";

function Nft13() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/5/image-background.png"
          alt="Background"
        />
      </div>

      <header className="relative py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" className="flex items-center" title="Auraui">
                <img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="p-1 text-gray-900 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
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

            <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-12 lg:mx-20">
              <a href="#" className={commonLinkClasses} title="About">
                About
              </a>
              <a href="#" className={commonLinkClasses} title="Apes">
                Apes
              </a>
              <a href="#" className={commonLinkClasses} title="Dashboard">
                Dashboard
              </a>
            </div>

            <div className="hidden lg:flex">
              <a
                href="#"
                className={`${commonButtonClasses} text-gray-900 bg-gray-100 border border-transparent hover:bg-gray-200`}
                role="button"
              >
                <AiOutlineLink className="mr-2" /> Connect Wallet
              </a>
            </div>
          </nav>

          {expanded && (
            <nav className="lg:hidden px-1 py-5">
              <div className="grid gap-y-6">
                <a href="#" className={commonLinkClasses} title="About">
                  About
                </a>
                <a href="#" className={commonLinkClasses} title="Apes">
                  Apes
                </a>
                <a href="#" className={commonLinkClasses} title="Dashboard">
                  Dashboard
                </a>
                <a
                  href="#"
                  className={`${commonButtonClasses} text-gray-900 bg-gray-100 border border-transparent hover:bg-gray-200`}
                  role="button"
                >
                  <AiOutlineLink className="mr-2" /> Connect Wallet
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-sm mx-auto lg:max-w-xl">
            <p className="text-lg font-semibold tracking-wide text-rose-500">
              Auraui Collection
            </p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 lg:mt-8 sm:text-4xl lg:text-5xl xl:text-8xl">
              Discover Unique 3D NFTs, New Every Day!
            </h1>
            <div className="mt-8 lg:mt-14">
              <a
                href="#"
                className={`${commonButtonClasses} text-white bg-blue-600 border border-transparent hover:bg-blue-700`}
                role="button"
              >
                <MdExplore className="mr-2" /> Explore on Opensea
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nft13;
