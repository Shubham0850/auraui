import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Hero38() {
  return (
    <section
      style={{
        backgroundImage: "url('https://www.auraui.com/images/heroBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative bg-[#F8F8F8] py-24 md:pt-32 h-auto md:h-[800px] lg:pt-40"
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full mt-8 lg:mt-0 lg:w-[80%]">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
              style={{ lineHeight: "1.3" }}
            >
              Discover the future of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                digital innovation
              </span>{" "}
              with Auraui.com, where cutting-edge technology meets
              transformative solutions.
            </h1>

            {/* Contact Button */}
            <Link href="mailto:contact@asvaventures.com">
              <h1 className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#80FE7E] via-[#62FEA5] to-[#52FFBC] text-[#111111] px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-normal tracking-wide rounded-none hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#62FEA5]">
                Contact Us
                <BsArrowRight className="w-5 h-5 animate-bounce" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero38;
