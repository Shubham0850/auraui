"use client";

import React from "react";
import { FaCheckCircle, FaArrowRight, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const Cta7 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#fef9f9] via-[#ecf3ff] to-[#f1f8f9] overflow-hidden">
      {/* Accent blurred background */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#93c5fd]/30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#fcd34d]/30 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        {/* Headline & Subtitle */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Unlock Full Access to AuraUI
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of developers building beautiful interfaces
            effortlessly. AuraUI gives you the power to create fast, stunning
            layouts.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14 lg:mt-16">
          {[
            { title: "130+ Blocks", desc: "Ready to use" },
            { title: "14 Pages", desc: "Make it live" },
            { title: "Easy Access", desc: "Anyone can use" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <FaCheckCircle className="w-7 h-7 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Email Form */}
        <motion.form
          action="#"
          method="POST"
          className="max-w-xl mx-auto mt-12 sm:px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col items-start sm:flex-row bg-white shadow-lg rounded-full p-1.5 sm:p-2">
            <div className="relative flex-1 w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 pl-12 text-base text-gray-800 placeholder-gray-400 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>

            <button className="inline-flex items-center justify-center px-6 py-4 mt-4 sm:mt-0 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300">
              Get Instant Access
              <FaArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.form>

        {/* Trust Notice */}
        <motion.div
          className="flex items-center justify-center mt-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <FaLock className="w-4 h-4 mr-2" />
          Your data is completely secure with us. We respect your privacy.
        </motion.div>
      </div>
    </section>
  );
};

export default Cta7;
