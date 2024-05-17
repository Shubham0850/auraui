import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="">
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex px-4 py-2 text-xs text-gray-900 dark:text-gray-100 border rounded-full">Made by Developers, for Developers</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight">Quality resources shared by the community</h1>

            <div className="max-w-xl p-8 mx-auto mt-10 overflow-hidden bg-gray-100 rounded-3xl">
              <div className="grid grid-cols-1 text-center sm:grid-cols-3 gap-y-10 gap-x-10">
                <div>
                  <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-2xl w-16 h-16">
                    <img className="w-4 h-4" src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg" alt="" />
                    <span className="text-[25px] font-bold text-gray-900 font-pj ml-1 inline-flex"> C </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-600 font-pj">Copy code</p>
                </div>

                <div>
                  <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-2xl w-16 h-16">
                    <img className="w-4 h-4" src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg" alt="" />
                    <span className="text-[25px] font-bold text-gray-900 font-pj ml-1 inline-flex"> V </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-600 font-pj">Paste the code</p>
                </div>

                <div>
                  <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-2xl w-16 h-16">
                    <img className="w-4 h-4" src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg" alt="" />
                    <span className="text-[25px] font-bold text-gray-900 font-pj ml-1 inline-flex"> R </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-600 font-pj">Ship your website</p>
                </div>
              </div>
            </div>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                Get access to 1000+ resources
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <img className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
