import React from "react";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA9 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#d1d5ff] overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-gradient-radial from-indigo-300/30 to-transparent rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-gradient-radial from-indigo-200/20 to-transparent rounded-full blur-2xl z-0" />

      <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-3xl text-center">
        {/* Header Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          Unlock the Full Potential of{" "}
          <span className="text-indigo-600">AuraUI</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-gray-700 max-w-xl mx-auto"
        >
          Subscribe to receive product updates, insights, and early access to
          exclusive features that elevate your UI design process.
        </motion.p>

        {/* Form Box */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          action="#"
          method="POST"
          className="mt-10 bg-white/70 backdrop-blur-md border border-white/30 p-6 sm:p-8 rounded-2xl shadow-xl max-w-xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full flex-1 px-5 py-3 rounded-md text-gray-900 bg-white border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition">
              Get Instant Access
              <svg
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.form>

        {/* Trust Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 flex items-center justify-center text-gray-500 text-sm"
        >
          <FaLock className="mr-2 text-indigo-500" />
          <span>
            Your data is <strong>100% secure</strong> and protected with AuraUI.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA9;
