"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#resources", label: "Resources" },
  { href: "#pricing", label: "Pricing" },
];

const Header3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" max-w-7xl ">
      {/* Main Nav */}
      <nav className="relative flex items-center justify-between px-6 py-3 bg-white backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md">
        {/* Left Nav (Desktop) */}
        <div className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray-800 transition-all hover:text-purple-600 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image
              className="h-9 w-auto"
              src="https://www.auraui.com/logo-light.png"
              alt="Aura UI Logo"
              height={40}
              width={140}
            />
          </Link>
        </div>

        {/* Right Nav (Desktop) */}
        <div className="hidden xl:flex items-center space-x-8">
          <Link
            href="#signup"
            className="text-base font-medium text-gray-800 hover:text-purple-600"
          >
            Sign up
          </Link>
          <Link
            href="#signin"
            className="text-base font-medium text-gray-800 hover:text-purple-600"
          >
            Sign in
          </Link>
          <Link
            href="#cart"
            className="flex items-center justify-center w-11 h-11 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            title="Cart"
          >
            <FiShoppingCart className="w-6 h-6" />
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center space-x-3 xl:hidden">
          <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-md">
            <FiShoppingCart className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-800 hover:bg-gray-200 rounded-md transition-all"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden mt-3 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-6"
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
                    className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-gray-200 my-4" />
              <Link
                href="#signup"
                className="text-lg font-medium text-gray-800 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
              <Link
                href="#signin"
                className="text-lg font-medium text-gray-800 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header3;
