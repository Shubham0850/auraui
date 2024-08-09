import React from "react";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import Link from "next/link";

function Nft5() {
  return (
    <section className="relative pt-12 overflow-hidden bg-gray-900 sm:pt-16 lg:py-20 xl:py-24">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto lg:flex lg:items-center">
          <div className="max-w-md mx-auto text-center lg:w-1/2 lg:text-left lg:max-w-none lg:mx-0">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-6xl">
              Discover & Collect NFTs with Auraui{" "}
              <FaFire className="inline text-red-500" />
            </h1>
            <p className="max-w-sm mx-auto mt-6 text-lg font-normal text-gray-200 lg:mx-0 xl:text-xl">
              Explore our curated collection of NFTs and join the Auraui
              community. Over 2,200 unique artworks await!
            </p>
            <div className="mt-10">
              <Link
                href="#"
                title="Place your bid"
                className="inline-flex items-center justify-center px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-600"
                role="button"
              >
                Place your bid
              </Link>
            </div>

            <div className="inline-grid grid-cols-2 mt-12 gap-x-8">
              <div className="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                <p className="text-4xl font-bold text-white">486+</p>
                <p className="mt-2 text-sm font-medium text-gray-400 lg:mt-0">
                  Talented <br className="hidden lg:block" />
                  Artists
                </p>
              </div>

              <div className="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                <p className="text-4xl font-bold text-white">69,69+</p>
                <p className="mt-2 text-sm font-medium text-gray-400 lg:mt-0">
                  Unique <br className="hidden lg:block" />
                  Projects
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:w-1/2 lg:mt-0">
            <Image
              className="max-w-xs mx-auto rounded-full lg:max-w-sm lg:absolute lg:inset-x-0 lg:-bottom-80"
              src="https://www.auraui.com/web3Images/nft/nft3.avif"
              alt="Phone Mockup"
              width={500}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nft5;
