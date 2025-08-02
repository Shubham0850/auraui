"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const styles = {
  link: "text-base font-medium text-gray-700 transition-all duration-200 hover:text-[#5E3BEE]",
  button:
    "px-5 py-2 rounded-lg bg-[#5E3BEE] text-white font-medium shadow-md hover:shadow-lg hover:bg-[#4a2ed9] transition-all duration-200",
};

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="relative flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" title="AuraUI" className="flex items-center">
              <Image
                src="https://www.auraui.com/logo-light.png"
                alt="AuraUI Logo"
                width={140}
                height={40}
                className="h-8 w-auto lg:h-10"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex p-2 ml-5 text-gray-700 transition-all duration-200 rounded-md xl:hidden hover:bg-gray-100 focus:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <Link href="#features" className={styles.link}>
              Features
            </Link>
            <Link href="#solutions" className={styles.link}>
              Solutions
            </Link>
            <Link href="#resources" className={styles.link}>
              Resources
            </Link>
            <Link href="#pricing" className={styles.link}>
              Pricing
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="#signin" className={styles.link}>
              Sign in
            </Link>
            <Link href="#signup" className={styles.button}>
              Sign up
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="flex flex-col py-4 mt-2 space-y-3 bg-white shadow-md rounded-lg animate-slideDown lg:hidden">
            <Link href="#features" className={styles.link}>
              Features
            </Link>
            <Link href="#solutions" className={styles.link}>
              Solutions
            </Link>
            <Link href="#resources" className={styles.link}>
              Resources
            </Link>
            <Link href="#pricing" className={styles.link}>
              Pricing
            </Link>
            <div className="pt-2 flex flex-col gap-2 border-t border-gray-200">
              <Link href="#signin" className={styles.link}>
                Sign in
              </Link>
              <Link href="#signup" className={styles.button}>
                Sign up
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header1;
