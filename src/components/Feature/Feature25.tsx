import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Feature25 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-24 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-7">
            <motion.p
              className="text-sm font-semibold text-blue-600 tracking-wide uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Premium Illustration Kits by Auraui
            </motion.p>

            <motion.h2
              className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              Build Modern Illustrations Effortlessly with Auraui
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            >
              Auraui provides a rich library of customizable illustration kits
              to help you elevate your projects with style, consistency, and
              visual delight—no design skills required.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 border-t border-gray-200 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-gray-900">
                  Unlock infinite creative options
                </h3>
                <p className="text-sm text-gray-600">
                  Design and deploy visuals without hassle.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-gray-900">
                  20+ ready-made illustration sets
                </h3>
                <p className="text-sm text-gray-600">
                  Easy to adapt, ready to inspire your users.
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white transition bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Start using Auraui
                <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Side Image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/vector-1745877548199-be333a72ce94?q=80&w=970&auto=format&fit=crop"
                alt="Auraui Illustration Kit"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature25;
