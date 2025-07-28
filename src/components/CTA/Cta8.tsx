"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Cta8 = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-28 xl:py-36">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://www.auraui.com/memeimage/laptop-girl.jpeg"
          alt="Girl working on laptop"
          fill
          className="object-cover object-left-top scale-105 brightness-[0.6]"
          priority
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="max-w-xl sm:max-w-lg md:max-w-md text-left">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get Full Access to <span className="text-indigo-400">auraUI</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Join the AuraUI community and gain premium access to all features
            that help you build stunning, responsive websites with ease.
          </motion.p>

          {/* Form */}
          <motion.form
            className="mt-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  required
                  className="w-full py-3 pl-12 pr-4 text-gray-100 placeholder-gray-400 bg-black/40 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition rounded-full"
                />
                <div className="absolute inset-y-0 left-4 flex items-center text-gray-400 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>

              <button className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md transition rounded-full">
                Access
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Cta8;
