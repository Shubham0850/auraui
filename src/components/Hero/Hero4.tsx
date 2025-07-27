import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero4 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-950 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#22d3ee_0%,_transparent_40%)] opacity-10 z-0" />

      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#">
            <Image
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI Logo"
              width={100}
              height={60}
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex space-x-10 text-white text-sm">
            {["Products", "Features", "Pricing", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:inline-flex relative group">
            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all group-hover:shadow-xl group-hover:shadow-cyan-500/30" />
            <a
              href="#"
              className="relative z-10 inline-flex items-center px-6 py-2 bg-black text-white rounded-full font-medium"
            >
              Start Free Trial
            </a>
          </div>

          <button
            className="text-white md:hidden"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {expanded && (
          <div className="md:hidden mt-4 px-4 space-y-4">
            {["Products", "Features", "Pricing", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-300 hover:text-white"
              >
                {item}
              </a>
            ))}
            <div className="relative group">
              <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all group-hover:shadow-md" />
              <a
                href="#"
                className="relative z-10 inline-flex items-center px-6 py-2 bg-black text-white rounded-full w-full justify-center"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Connecting Devs with Employers
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              AuraUI connects top developers with the best opportunities.
              Discover your next big project or join a dynamic team today.
            </p>
            {/* Search Input */}
            <form
              action="#"
              method="POST"
              className="relative mt-8 rounded-full sm:mt-12"
            >
              <div className="relative">
                <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                    <FaSearch className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    placeholder="Try React Dev, etc."
                    className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                  />
                </div>
              </div>
              <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                <div className="inline-flex cursor-pointer items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-gray-200 rounded-full sm:w-auto sm:py-3 hover:opacity-90">
                  Find A Developer
                </div>
              </div>
            </form>
            {/* Rating */}
            <div className="mt-8">
              <p className="text-white">Trusted by 50k+ users</p>
              <div className="flex items-center mt-2 gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <HiOutlineStar key={i} className="text-cyan-400 w-5 h-5" />
                ))}
                <HiOutlineStar className="text-gray-500 w-5 h-5" />
                <span className="text-white ml-2">4.1/5</span>
                <span className="text-gray-400 ml-1">(14k Reviews)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 blur-lg rounded-2xl" />
            <Image
              src="https://www.auraui.com/memeimage/devss.jpg"
              alt="Hero visual"
              width={600}
              height={600}
              className="relative rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero4;
