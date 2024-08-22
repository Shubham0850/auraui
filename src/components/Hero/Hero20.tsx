import React from "react";
import { BiUser } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuShoppingBag } from "react-icons/lu";

function Hero20() {
  const commonStyles = {
    headerLink:
      "text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
    buttonBase:
      "inline-flex items-center justify-center px-6 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700",
    statText: "text-4xl font-bold text-white",
    statLabel: "mt-2 text-sm font-medium text-gray-300",
    searchInput:
      "block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2",
  };

  return (
    <section>
      <header className="bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <button
              type="button"
              className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
            >
              <HiOutlineBars3 className="w-7 h-7" />
            </button>

            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="AuraUI" className="inline-flex">
                <span className="sr-only">AuraUI logo</span>
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI logo"
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:ml-16 xl:ml-24 lg:space-x-8">
              <a
                href="#"
                title="Men's Accessories"
                className={commonStyles.headerLink}
              >
                Men
              </a>
              <a
                href="#"
                title="Women's Accessories"
                className={commonStyles.headerLink}
              >
                Women
              </a>
              <a
                href="#"
                title="All Brands"
                className={commonStyles.headerLink}
              >
                All Brands
              </a>
              <a href="#" title="Stores" className={commonStyles.headerLink}>
                Stores
              </a>
              <a
                href="#"
                title="Customer Support"
                className={commonStyles.headerLink}
              >
                Customer Support
              </a>
            </div>

            <div className="flex items-center justify-end ml-auto space-x-2 sm:space-x-5">
              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <BiUser className="h-6 w-6" />
              </button>

              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <FaRegHeart className="h-5 w-5" />
              </button>

              <button
                type="button"
                className="relative p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <LuShoppingBag className="h-5 w-5" />
                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            className="object-cover object-center w-full h-full"
            src="https://www.auraui.com/memeimage/hero20.jpg"
            alt="Fashion Accessories"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              Discover the Best Fashion Accessories for Every Occasion
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
              Elevate your style with our curated selection of fashion
              accessories. From elegant jewelry to trendy bags, find everything
              you need to complement your look.
            </p>
            <form action="#" className="max-w-xl mx-auto mt-10">
              <div>
                <label className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-300" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Accessories..."
                    className={commonStyles.searchInput}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white hover:bg-gray-700
                  "
                >
                  Search Now
                </button>
              </div>
            </form>
            <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16  gap-x-6 grid-col-2">
              <div>
                <p className={commonStyles.statText}>38,942</p>
                <p className={commonStyles.statLabel}>Orders Delivered</p>
              </div>
              <div>
                <p className={commonStyles.statText}>14,344</p>
                <p className={commonStyles.statLabel}>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero20;
