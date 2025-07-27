"use client";

import React, { useState } from "react";
import { LuMenu, LuPlay, LuX } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MenuIcon = ({ isOpen }: { isOpen: boolean }) =>
  isOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />;
const PlayIcon = () => <LuPlay className="h-5 w-5 mr-2" />;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Hero32() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F1147] via-[#301F67] to-[#4E2D97] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Header */}
      <header className="relative z-10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI"
              width={160}
              height={50}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10 text-white text-sm">
            {["Features", "Pricing", "Automation"].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                variants={fadeIn}
                custom={i}
                initial="hidden"
                animate="visible"
                className="hover:text-purple-300 transition font-medium"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="#" className="text-white text-sm hover:text-gray-300">
              Customer Login
            </Link>
            <Link
              href="#"
              className="px-5 py-2.5 rounded-xl bg-white text-purple-700 text-sm font-semibold hover:bg-purple-100"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <MenuIcon isOpen={menuOpen} />
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 px-4 space-y-4 text-white"
          >
            {["Features", "Pricing", "Automation", "Customer Login"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-sm py-2 border-b border-white/10"
                >
                  {item}
                </Link>
              ),
            )}
            <Link
              href="#"
              className="block w-full text-center bg-white text-purple-700 py-2 rounded-xl font-semibold"
            >
              Sign Up
            </Link>
          </motion.nav>
        )}
      </header>

      {/* Hero Content */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl mx-auto leading-tight tracking-tight"
          variants={fadeIn}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          Craft Beautiful Interfaces <br />
          with{" "}
          <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] bg-clip-text text-transparent">
            AuraUI
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-purple-100 max-w-xl mx-auto"
          variants={fadeIn}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          A developer-first design kit that helps you ship gorgeous components
          with ease and elegance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeIn}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-700 text-base font-semibold rounded-xl hover:bg-purple-100"
          >
            Get AuraUI Now
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white text-base font-semibold rounded-xl border border-white/20 hover:bg-white/20"
          >
            <PlayIcon />
            Watch Demo
          </Link>
        </motion.div>

        <motion.p
          className="mt-8 text-sm text-purple-200"
          variants={fadeIn}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          No credit card required · Free & open source components
        </motion.p>
      </section>
    </div>
  );
}

export default Hero32;
