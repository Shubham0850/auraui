import React from "react";

type Props = {};

function Accessories({}: Props) {
  return (
    <section>
      <header className="bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <button
              type="button"
              className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="" className="inline-flex">
                <span className="sr-only"> Rareblocks logo </span>
                <img className="w-auto h-8" src="/logo-light.png" alt="" />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:ml-16 xl:ml-24 lg:space-x-8">
              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Men{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Women{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                All Brands{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Stores{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Customer Support{" "}
              </a>
            </div>

            <div className="flex items-center justify-end ml-auto space-x-2 sm:space-x-5">
              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="relative p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>

                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                  {" "}
                  3{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            className="object-cover object-right w-full h-full lg:object-center"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              Find the best office accessories in one tap
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
              nisl eu consectetur. Mi massa elementum odio eu viverra amet.
            </p>

            <form action="#" className="max-w-xl mx-auto mt-10">
              <div>
                <label htmlFor="" className="sr-only">
                  {" "}
                  Search{" "}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Try Desk, Chair, Webcam etc..."
                    className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-4
                                text-sm
                                font-bold
                                tracking-widest
                                text-white
                                uppercase
                                transition-all
                                duration-200
                                bg-gray-800
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                hover:bg-gray-700
                            "
                >
                  Search now
                </button>
              </div>
            </form>

            <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
              <div>
                <p className="text-4xl font-bold text-white">38,942</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Order Delivered
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-white">14,344</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Registered Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accessories;
