"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Reusable Menu Items Component
const MenuItems: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="space-y-3 lg:space-y-0 lg:flex gap-8 items-center">
    {[
      { label: "Top Sustainable Companies", path: "/country" },
      { label: "ESG Software", path: "/" },
      { label: "Resources", path: "/" },
      { label: "About Us", path: "/" },
    ].map((item, idx) => (
      <Link key={idx} href={item.path} onClick={onClick}>
        <span className="relative text-sm font-medium text-gray-700 cursor-pointer px-1 group">
          {item.label}
          {/* sliding background hover */}
          <span className="absolute inset-0 bg-blue-50 rounded-md scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-10"></span>
        </span>
      </Link>
    ))}
  </div>
);

// Reusable Language Switcher Component
const LanguageSwitcher: React.FC = () => (
  <div className="flex gap-1 items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
    <span>EN</span>
    <Image
      src="https://www.auraui.com/icons/language.svg"
      alt="language"
      width={18}
      height={18}
    />
  </div>
);

const Header9: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col lg:flex-row justify-center bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="flex p-4 justify-between items-center text-black max-w-[1600px] w-full">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="https://www.auraui.com/logo-light.png"
            alt="Auraui Logo"
            width={100}
            height={40}
            className="transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between gap-8">
          <MenuItems />
          <div className="flex gap-4 items-center">
            <button
              className="rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm px-4 py-2 font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all relative overflow-hidden"
              aria-label="Get Free ESG Score"
            >
              <span className="relative z-10">Free ESG Score</span>
              {/* glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></span>
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden flex justify-center w-full bg-white p-6 border-t border-gray-200"
          >
            <div className="space-y-5 text-start w-full max-w-sm">
              <MenuItems onClick={() => setIsMenuOpen(false)} />
              <button
                className="w-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm px-4 py-2 font-medium shadow-sm hover:scale-105 transition-all"
                aria-label="Get Free ESG Score"
              >
                Free ESG Score
              </button>
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header9;
