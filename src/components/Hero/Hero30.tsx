import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

const navLinks = ["Products", "Features", "Pricing", "Support"];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Hero30() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-black">
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Header */}
      <header className="relative z-10 py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              className="h-9 w-auto"
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI Logo"
            />
          </a>

          <button
            className="text-white md:hidden"
            onClick={() => setExpanded((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {expanded ? (
              <FaTimes className="w-7 h-7" />
            ) : (
              <FaBars className="w-7 h-7" />
            )}
          </button>

          <nav className="hidden md:flex md:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-base text-gray-400 hover:text-white transition"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {expanded && (
          <div className="md:hidden px-4 mt-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-base text-gray-400 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 sm:pb-20 lg:pb-32 xl:pb-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-16">
            {/* Text Content */}
            <div className="lg:w-2/3">
              <motion.p
                className="text-sm font-medium tracking-wide uppercase text-gray-400"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                The Ultimate Toolkit for UI Design
              </motion.p>

              <motion.h1
                className="mt-4 text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                Design Stunning UIs Effortlessly with{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  AuraUI
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-xl text-gray-400 max-w-2xl"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                AuraUI offers high-quality components and templates, helping you
                build beautiful websites faster. No complex setup required—just
                focus on your creativity.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-4"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <a
                  href="#"
                  className="px-6 py-3 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition"
                >
                  Get UI Kit Now
                </a>
                <a
                  href="#"
                  className="px-6 py-3 text-base font-semibold text-white border border-white rounded-full hover:bg-white hover:text-black transition"
                >
                  Check Live Preview
                </a>
              </motion.div>

              {/* Info Line */}
              <motion.div
                className="flex items-center gap-3 pt-10"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <MdDesignServices className="w-6 h-6 text-white" />
                <span className="text-white text-base">
                  42 new design inspirations added this week
                </span>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="relative mt-16 lg:mt-0 lg:w-1/3"
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="rounded-2xl shadow-2x p-1.5">
                <img
                  src="/memeimage/hero30.png"
                  alt="AuraUI Mockup"
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero30;
