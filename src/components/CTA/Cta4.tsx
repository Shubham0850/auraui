"use client";

import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA4 = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-purple-100 via-blue-100 to-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/80 shadow-2xl rounded-3xl px-8 py-14"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get full access to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
              AuraUI
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            100+ beautifully coded blocks to power your next project
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center mt-10 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-fuchsia-600 rounded-xl shadow-md hover:from-blue-700 hover:to-fuchsia-700"
            >
              Try For Free
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-gray-800 transition-all duration-200 border border-gray-800 rounded-xl hover:bg-gray-900 hover:text-white"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact Sales
            </a>
          </motion.div>

          {/* Login Link */}
          <motion.p
            className="mt-8 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium transition-all duration-200 underline"
            >
              Log in
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA4;
