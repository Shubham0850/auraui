"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaPlay } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Products", link: "/products" },
  { name: "Features", link: "/features" },
  { name: "Pricing", link: "/pricing" },
  { name: "Support", link: "/support" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Hero33 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Glow grid overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Header */}
      <header className="relative z-10 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="#" className="shrink-0">
            <Image
              src="https://www.auraui.com/logo-dark.png"
              alt="Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.link}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeIn}
                className="hover:text-purple-300 transition"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-4 ml-auto">
            <Link
              href="#"
              className="px-5 py-2 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-md hover:bg-white/10 transition"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden ml-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-2.5 border border-white/40 rounded-full hover:bg-white/10 transition"
              aria-label="Toggle Menu"
            >
              {expanded ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 px-4 lg:hidden"
          >
            <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-md shadow-md">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-sm py-2 rounded hover:bg-white/10 transition"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#"
                className="text-sm mt-2 text-center rounded-full border border-white/30 py-2 hover:bg-white/10"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-36 sm:pb-52 text-center">
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            variants={fadeIn}
            custom={0}
          >
            Launch SaaS Projects <br />
            <span className="bg-gradient-to-r from-[#FF6FD8] to-[#3813C2] text-transparent bg-clip-text">
              at Warp Speed
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg max-w-xl mx-auto text-gray-300"
            variants={fadeIn}
            custom={1}
          >
            Use Clarity and AuraUI to build professional-grade UI experiences in
            minutes, not weeks.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeIn}
            custom={2}
          >
            <Link
              href="#"
              className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white text-base font-semibold shadow-lg"
            >
              Get 14 Days Free Trial
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 backdrop-blur-md rounded-xl hover:bg-white/10 transition"
            >
              <FaPlay className="w-4 h-4 mr-2" />
              Watch 1-min Demo
            </button>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-gray-400"
            variants={fadeIn}
            custom={3}
          >
            No credit card required • Cancel anytime
          </motion.p>

          {/* Video Mockup */}
          <motion.div
            className="relative mt-14 sm:mt-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/8355405/pexels-photo-8355405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mockup"
              className="rounded-3xl border-4 border-purple-600 p-3 shadow-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/30 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20">
                <FaPlay className="w-4 h-4 mr-2" />
                Play Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero33;
