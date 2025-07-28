"use client";

import React from "react";
import { motion } from "framer-motion";

const Cta2 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start">
              <img
                className="object-cover w-16 h-16 rounded-full border-4 border-white shadow-md"
                src="/memeimage/girl2.jpeg"
                alt="Jenny Wilson"
              />
              <blockquote className="mt-6 text-xl font-medium text-white leading-relaxed">
                “AuraUI provides the best components I&apos;ve ever used. The
                designs are sleek and the integration is seamless. Highly
                recommend for any developer.”
              </blockquote>
              <p className="mt-6 text-white font-semibold">Jenny Wilson</p>
              <p className="text-indigo-200">Project Manager at Microsoft</p>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl p-10 lg:px-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white">
              Join 5,482 other developers
            </h3>
            <p className="mt-4 text-lg text-indigo-100 leading-relaxed">
              AuraUI offers a rich library of over 100+ handcrafted components.
              Elevate your project with high-quality UI elements.
            </p>

            <a
              href="#"
              className="flex items-center justify-center w-full px-6 py-4 mt-8 text-base font-semibold text-gray-900 bg-yellow-300 rounded-xl transition-all hover:bg-yellow-400"
              role="button"
            >
              Create your first website
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-full px-6 py-4 mt-4 text-base font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-gray-900 transition-all"
              role="button"
            >
              Talk to sales
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;
