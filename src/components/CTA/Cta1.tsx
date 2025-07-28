"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const CTA1 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
      {/* Blurred Background Accent Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center text-white">
        {/* Avatar Row */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/memeimage/girl2.jpeg"
            alt="Avatar 1"
            className="w-16 h-16 rounded-full object-cover -mr-4 border-4 border-white shadow-md"
          />
          <img
            src="/memeimage/boy1.jpeg"
            alt="Avatar 2"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <img
            src="/memeimage/girl3.webp"
            alt="Avatar 3"
            className="w-16 h-16 rounded-full object-cover -ml-4 border-4 border-white shadow-md"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join{" "}
          <span className="inline-block px-3 py-1 bg-yellow-300 text-black rounded-lg">
            5,482
          </span>{" "}
          developers using AuraUI
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join our vibrant community of designers and developers building the
          future of interfaces with AuraUI. Stay inspired, stay connected.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#"
          className="inline-flex items-center justify-center px-6 py-4 mt-10 text-base font-semibold text-gray-800 bg-yellow-300 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
          role="button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaUser className="w-5 h-5 mr-2" />
          Get Instant Access
        </motion.a>
      </div>
    </section>
  );
};

export default CTA1;
