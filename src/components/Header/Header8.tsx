import React from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Header8 = () => {
  return (
    <nav className="bg-black text-white p-3 md:p-5">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Desktop Logo */}
          <Image
            src="https://www.auraui.com/logo-dark.png"
            width={130}
            height={46}
            className="md:w-[130px] w-[80px] "
            alt="Desktop Logo"
          />
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-[319px] h-12 bg-gray-800 rounded-full px-4 shadow-md border border-gray-700">
            <IoSearch size={20} className="text-white mr-2" />
            <input
              type="text"
              placeholder="Search for location, villa, facilities..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* About Us */}
          <h2 className="hidden md:block text-sm font-medium">About Us</h2>
          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-2">
            <BsTelephone />
            <span className="text-base font-medium">08069160000</span>
          </div>
          {/* Login Button */}
          <button className="hidden md:block px-6 py-2 bg-white text-black rounded-full text-sm font-semibold">
            Login
          </button>
          {/* Mobile Search Icon */}
          <IoSearch size={20} className="text-white mr-2 md:hidden " />
        </div>
      </div>
    </nav>
  );
};

export default Header8;
