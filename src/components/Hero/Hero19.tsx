import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuShoppingBag } from "react-icons/lu";
import { motion } from "framer-motion";

const Hero19 = () => {
  return (
    <section>
      {/* Navbar */}
      <header className="bg-gray-900 border-b border-gray-800 relative z-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <a href="#" className="flex items-center">
              <img
                className="w-auto h-8"
                src="https://www.auraui.com/logo-dark.png"
                alt="AuraUI logo"
              />
            </a>

            <nav className="hidden lg:flex gap-10 xl:gap-14">
              {["Components", "Features", "Docs", "Support"].map(
                (text, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-base font-medium text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {text}
                  </a>
                ),
              )}
            </nav>

            <div className="flex items-center gap-4">
              <button className="lg:hidden text-white hover:text-gray-200">
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
              <button className="relative text-white hover:text-gray-200">
                <LuShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-600 text-xs font-bold text-white rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-gray-900 to-black py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#6b21a8_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Design Stunning UIs Effortlessly with{" "}
              <span className="text-indigo-400">AuraUI</span>
            </h1>
            <p className="mt-6 text-base text-gray-400 leading-relaxed">
              AuraUI offers high-quality components and templates, helping you
              build beautiful websites faster. No complex setup required—just
              focus on your creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-white text-gray-900 rounded-md shadow hover:bg-gray-200 transition"
              >
                Get UI Kit Now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-gray-700 rounded-md hover:bg-gray-800 transition"
              >
                Check Live Preview
              </a>
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full lg:w-[55%] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              className="object-cover w-full h-full rounded-2xl"
              src="https://www.auraui.com/memeimage/ui.jpg"
              alt="AuraUI showcase"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero19;
