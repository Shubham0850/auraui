import React from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Header8 = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-3 md:p-5 shadow-lg rounded-b-xl">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Desktop Logo */}
          <Image
            src="https://www.auraui.com/logo-dark.png"
            width={140}
            height={50}
            className="md:w-[140px] w-[90px] transition-transform hover:scale-105"
            alt="AuraUI Logo"
          />

          {/* Search Bar */}
          <div className="hidden md:flex items-center w-[340px] h-12 bg-gray-800/80 rounded-full px-4 shadow-inner border border-gray-700 focus-within:border-cyan-400 transition-all">
            <IoSearch size={20} className="text-cyan-400 mr-2" />
            <input
              type="text"
              placeholder="Search location, villa, facilities..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* About Us */}
          <h2 className="hidden md:block text-sm font-medium hover:text-cyan-400 transition-colors cursor-pointer">
            About Us
          </h2>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
            <BsTelephone />
            <span className="text-base font-medium">08069160000</span>
          </div>

          {/* Login Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold shadow-md hover:scale-105 hover:shadow-cyan-500/40 transition-transform">
            Login
          </button>

          {/* Mobile Search Icon */}
          <IoSearch
            size={22}
            className="text-cyan-400 mr-2 md:hidden cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header8;
