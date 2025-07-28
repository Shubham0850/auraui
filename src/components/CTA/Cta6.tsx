"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA6 = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600">
      {/* Decorative blurred circle */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-400/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl px-6 mx-auto sm:px-10">
        <motion.div
          className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/10 shadow-xl px-8 py-10 sm:flex sm:items-center sm:justify-between sm:space-x-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get full access to{" "}
            <span className="text-yellow-300  decoration-2 underline-offset-4">
              auraUI
            </span>
          </motion.h2>

          <motion.a
            href="#"
            className="inline-flex items-center justify-center px-6 py-4 mt-6 text-base font-semibold text-gray-900 transition-all duration-300 bg-yellow-300 rounded-xl shadow-md hover:bg-yellow-400 sm:mt-0"
            role="button"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get instant access
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA6;
