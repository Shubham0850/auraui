"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA5 = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 sm:py-24 lg:py-28">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

      <div className="relative max-w-6xl px-6 mx-auto sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Unlock Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
                AuraUI
              </span>{" "}
              Experience
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sign up to access premium components, kits, and insights to
              supercharge your workflow.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.form
            action="#"
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-xl lg:mt-0"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 w-full px-5 py-4 rounded-xl bg-white/70 backdrop-blur-md shadow-md border border-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="w-full sm:w-auto px-6 py-4 text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-200">
                Get Started Free
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTA5;
