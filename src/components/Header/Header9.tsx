"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Reusable Menu Items Component
const MenuItems: React.FC = () => (
  <div className="space-y-4 lg:space-y-0 lg:flex gap-10 items-center">
    <Link href={"/country"}>
      <h1>Top Sustainable Companies</h1>
    </Link>

    <Link href={"/"}>
      <h1>ESG Software</h1>{" "}
    </Link>
    <Link href={"/"}>
      {" "}
      <h1>Resources</h1>
    </Link>
    <Link href={"/"}>
      {" "}
      <h1>About Us</h1>
    </Link>
  </div>
);

// Reusable Language Switcher Component
const LanguageSwitcher: React.FC = () => (
  <div className="flex gap-2 items-center">
    <h1>EN</h1>
    <Image
      src="https://www.auraui.com/icons/language.svg"
      alt="language"
      width={20}
      height={20}
    />
  </div>
);

const Header9: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-center bg-white shadow-md">
      <div className="flex p-4 justify-between items-center text-black max-w-[1600px] w-full">
        {/* Logo */}
        <div>
          {" "}
          <Link href={"/"}>
            <Image
              src="https://www.auraui.com/logo-light.png"
              alt="Auraui Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Menu for large screens */}
        <div className="hidden lg:flex items-center justify-between gap-10">
          <MenuItems />
          <div className="flex gap-4 items-center">
            <button
              className="rounded-md bg-[#1192EF] text-white text-[15px] leading-5 font-medium px-4 py-2"
              aria-label="Get Free ESG Score"
            >
              Free ESG Score
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Menu icon for small screens */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex justify-center w-full bg-white p-4">
          <div className="space-y-4 text-start">
            <MenuItems />
            <button
              className="rounded-md bg-[#1192EF] text-white text-[15px] leading-5 font-medium px-4 py-2 w-full"
              aria-label="Get Free ESG Score"
            >
              Free ESG Score
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header9;
