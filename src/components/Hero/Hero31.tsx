"use client";

import React from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const anchorStyles =
  "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />;
};

const DownloadIcon = () => <FiDownload className="w-5 h-5 mr-2" />;

function Hero31() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="relative py-4 md:py-6 z-10 bg-white/80 backdrop-blur-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="shrink-0">
              <Image
                className="w-auto h-8"
                src="https://www.auraui.com/logo-light.png"
                alt="AuraUI Logo"
                width={200}
                height={200}
              />
            </Link>

            <button
              type="button"
              className="text-gray-900 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={menuOpen} />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
              <div className="flex items-center space-x-12">
                {["About", "Home", "Services"].map((item, i) => (
                  <Link
                    href={`#${item.toLowerCase()}`}
                    key={item}
                    className={anchorStyles}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="w-px h-5 bg-gray-300" />

              <Link href="#login" className={anchorStyles}>
                Login
              </Link>

              <Link
                href="#signup"
                className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white"
              >
                Create free account
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="px-4 pt-6 pb-4 mx-auto flex flex-col gap-4 sm:px-6 lg:px-8 lg:hidden">
            {["About", "Home", "Services", "Login"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={anchorStyles}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#signup"
              className="block px-4 py-2 text-base font-semibold text-gray-900 transition border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white"
            >
              Create free account
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:pt-24 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.05)_1px,_transparent_1px)] [background-size:20px_20px] z-0" />

        <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-12 lg:items-center lg:grid-cols-2 xl:grid-cols-5">
            {/* Text Content */}
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-sm mx-auto sm:max-w-md md:max-w-full"
              >
                <motion.h1
                  className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj"
                  variants={fadeIn}
                  custom={0}
                >
                  Give AuraUI feedback by using Code
                </motion.h1>

                {/* Avatars and Info */}
                <motion.div
                  className="mt-8 lg:mt-12 lg:flex lg:items-center"
                  variants={fadeIn}
                  custom={1}
                >
                  <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                    {["akshay1.webp", "babubhaiya.jpg", "majnubhai.jpeg"].map(
                      (img, i) => (
                        <Image
                          key={i}
                          className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                          src={`https://www.auraui.com/memeimage/${img}`}
                          alt={`Avatar ${i}`}
                          width={56}
                          height={56}
                        />
                      ),
                    )}
                  </div>
                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                    Join with{" "}
                    <span className="font-bold">6969+ Developers</span> and
                    start to give feedback at AuraUI
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12"
                  variants={fadeIn}
                  custom={2}
                >
                  <Link
                    href="#feedback"
                    className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700"
                  >
                    Feedback
                  </Link>
                  <Link
                    href="#download"
                    className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold text-gray-900 bg-white border rounded-xl sm:mt-0 hover:bg-gray-100"
                  >
                    <DownloadIcon />
                    Download AuraUI
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              className="w-[90%] mx-auto scale-110 lg:col-span-3 xl:col-span-3"
              initial="hidden"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ opacity: 0, y: 30 }}
            >
              <Image
                className="w-full rounded-md shadow-xl"
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Visual"
                layout="responsive"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero31;
