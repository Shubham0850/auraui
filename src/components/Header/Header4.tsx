"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#resources", label: "Resources" },
  { href: "#pricing", label: "Pricing" },
];

const Header4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl ">
      {/* Main Nav */}
      <nav className="relative flex items-center justify-between px-6 py-3 bg-white backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" title="Aura UI" className="flex items-center">
            <Image
              className="w-auto h-8 lg:h-10"
              src="https://www.auraui.com/logo-light.png"
              alt="Aura UI Logo"
              height={40}
              width={140}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-1 text-base font-medium text-gray-800 transition-all duration-300 group"
            >
              {/* Gradient sliding background */}
              <span className="absolute inset-0 rounded-full scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              {/* Link text with gradient on hover */}
              <span className="relative z-10 transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:drop-shadow-md">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all"
        >
          Get started
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex p-2 text-gray-700 transition-all duration-200 rounded-md lg:hidden hover:bg-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-3 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-lg font-medium text-gray-800 transition-all group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="absolute inset-0 rounded-lg scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    <span className="relative z-10 transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <hr className="border-gray-200 my-4" />
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header4;
