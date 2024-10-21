import Image from "next/image";
import React from "react";

const Nft14 = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-sm mx-auto md:max-w-3xl">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-gray-900">Mint Monkey Bhai</p>

            <p className="text-xl font-medium text-gray-500">69/100</p>
          </div>

          <div className="mt-6 overflow-hidden bg-white border border-gray-200 md:mt-8 rounded-xl">
            <div className="md:flex">
              <div className="md:max-w-xs">
                <Image
                  className="object-cover w-full h-full"
                  src="https://www.auraui.com/web3Images/nft/nft6.jpeg"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>

              <div className="flex flex-col justify-between flex-1 p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="grid items-center grid-cols-2 gap-6">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Choose Quantity{" "}
                    </label>

                    <div className="">
                      <select
                        name=""
                        id=""
                        className="block w-full py-2 pl-4 outline-none  text-base font-medium text-gray-800 border-gray-800 border rounded-lg bg-gray-100 "
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid items-center grid-cols-2 gap-6">
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Mint Cost:{" "}
                    </span>

                    <div className="px-4 py-2 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between space-x-8">
                        <span className="text-base font-medium text-gray-900">
                          {" "}
                          1.87{" "}
                        </span>

                        <span className="text-base font-medium text-gray-400">
                          {" "}
                          LET{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-5 text-center md:mt-0">
                  <p className="text-base font-medium text-gray-500">
                    Wallet Balance:{" "}
                    <span className="text-gray-900">77.5 love Eth</span>
                  </p>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                  >
                    Mint
                  </button>

                  <p className="text-sm font-medium text-gray-400">
                    Mint Krne de Ameer bnega bechara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nft14;
