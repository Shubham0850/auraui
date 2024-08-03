import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const commonStyles = {
  button:
    "inline-flex items-center justify-center flex-1 w-full px-12 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
  link: "text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900",
  icon: "inline-flex items-center justify-center w-8 h-8 text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full hover:bg-gray-100",
};

function Nft6() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50">
      <header className="py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="Auraui">
                <img
                  className="w-auto h-8"
                  src="https://yourdomain.com/path-to-your-logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="p-1 text-gray-500 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <a href="#" title="About" className={commonStyles.link}>
                About
              </a>
              <a href="#" title="Our NFTs" className={commonStyles.link}>
                Our NFTs
              </a>
            </div>
          </nav>

          {expanded && (
            <nav>
              <div className="px-1 py-5">
                <div className="grid gap-y-6">
                  <a href="#" title="About" className={commonStyles.link}>
                    About
                  </a>
                  <a href="#" title="Our NFTs" className={commonStyles.link}>
                    Our NFTs
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="py-12 sm:py-16 lg:pb-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 gap-x-16">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0 lg:order-last">
              <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Coming Soon
              </p>
              <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Discover Our Exclusive NFT Collection
              </h1>
              <p className="mt-6 text-sm font-medium text-gray-500">
                Explore the world of Auraui with our upcoming collection of
                digital collectibles on the Ethereum blockchain.
              </p>

              <form action="#" method="POST" className="mt-8">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full px-3 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className={`${commonStyles.button} bg-indigo-600 hover:bg-indigo-700`}
                  >
                    Join Waiting List
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center mt-8 space-x-5 lg:mt-24 lg:justify-start">
                <span className="text-sm font-medium text-gray-500">
                  Connect with us:
                </span>
                <ul className="flex items-center space-x-2.5">
                  <li>
                    <a href="#" title="Twitter" className={commonStyles.icon}>
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Facebook" className={commonStyles.icon}>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Instagram" className={commonStyles.icon}>
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="LinkedIn" className={commonStyles.icon}>
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="grid max-w-md grid-cols-2 gap-3 mx-auto">
                <img
                  className="w-full h-full rounded-lg"
                  src="https://yourdomain.com/path-to-your-image-1.png"
                  alt="Auraui NFT 1"
                />
                <img
                  className="w-full h-full rounded-lg"
                  src="https://yourdomain.com/path-to-your-image-2.png"
                  alt="Auraui NFT 2"
                />
                <img
                  className="w-full h-full rounded-lg"
                  src="https://yourdomain.com/path-to-your-image-3.png"
                  alt="Auraui NFT 3"
                />
                <img
                  className="w-full h-full rounded-lg"
                  src="https://yourdomain.com/path-to-your-image-4.png"
                  alt="Auraui NFT 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nft6;
