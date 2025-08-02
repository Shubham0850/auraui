"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Header5 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "👨‍💻 Learn", path: "/learn" },
    { label: "💰 Earn", path: "/earn" },
    { label: "Explore", path: "/explore" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white backdrop-blur-xl border-b border-gray-200 shadow-lg w-full">
      <nav className="flex items-center justify-between px-6 py-4 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            className="w-auto h-9"
            src="https://www.auraui.com/logo-light.png"
            alt="AuraUI Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <Link
                href={item.path}
                className="text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400"
              >
                {item.label}
              </Link>
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {menuItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-2xl font-semibold text-gray-800 transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <Link
              href="/get-started"
              className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg hover:shadow-blue-400/40 hover:scale-110 transition-transform"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header5;
