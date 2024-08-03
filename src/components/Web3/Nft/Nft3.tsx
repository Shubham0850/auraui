import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const commonStyles = {
  link: "text-base font-medium text-gray-300 transition-all duration-200 hover:text-white",
  button:
    "inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700",
  input:
    "block w-full px-3 py-3 text-center placeholder-gray-500 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600",
};

const Nft3: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-indigo-600">
      <div className="absolute inset-0 hidden md:block">
        <img
          className="object-cover w-full h-full"
          src="https://example.com/new-background.png" // Replace with the updated background image URL
          alt="Auraui Background"
        />
      </div>

      <header className="relative py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="Auraui" className="flex items-center">
                <img
                  className="w-auto h-8"
                  src="https://example.com/auraui-logo.png" // Replace with the updated logo URL
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="p-1 text-white transition-all duration-200 bg-transparent rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-indigo-600 focus:ring-offset-2"
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
              <a href="#" title="About Auraui" className={commonStyles.link}>
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
                  <a
                    href="#"
                    title="About Auraui"
                    className={commonStyles.link}
                  >
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

      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto overflow-hidden text-center bg-white shadow-lg rounded-2xl">
            <div className="p-6 lg:p-8 xl:p-12">
              <h1 className="text-2xl font-bold text-gray-900">
                Auraui&apos;s NFT Collection Launching Soon
              </h1>

              <div className="flex items-center justify-between px-2 mt-8 space-x-3 lg:space-x-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Days</p>
                  <p className="mt-1 text-4xl font-bold text-rose-500">37</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-300 animate-pulse">
                    :
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Hours</p>
                  <p className="mt-1 text-4xl font-bold text-rose-500">14</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-300 animate-pulse">
                    :
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Minutes</p>
                  <p className="mt-1 text-4xl font-bold text-rose-500">45</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-300 animate-pulse">
                    :
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Seconds</p>
                  <p className="mt-1 text-4xl font-bold text-rose-500">17</p>
                </div>
              </div>

              <p className="mt-8 text-base font-medium text-gray-600">
                Explore Auraui&apos;s exclusive NFT collection - unique digital
                collectibles on the Ethereum blockchain.
              </p>

              <form action="#" method="POST" className="mt-10">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={commonStyles.input}
                        placeholder="Enter email address"
                      />
                      <MdEmail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  <div>
                    <button type="submit" className={commonStyles.button}>
                      Join Waiting List <IoMdArrowForward className="ml-2" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nft3;
