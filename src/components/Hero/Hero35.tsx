"use client";
import { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Hero35: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative bg-gradient-to-t from-black via-blue-900 to-black text-white h-screen flex flex-col justify-center items-center px-6">
      {/* Navigation */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">Fonnd</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#team" className="hover:underline">
            Team
          </a>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
          <a href="#contact" className="hover:underline">
            Contact us
          </a>
          <a
            href="#waitlist"
            className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Join waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button className="text-2xl focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-black to-blue-900 p-6 flex flex-col space-y-4 md:hidden">
            <a href="#team" className="hover:underline">
              Team
            </a>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
            <a href="#contact" className="hover:underline">
              Contact us
            </a>
            <a
              href="#waitlist"
              className="px-4 py-2 w-[130px] bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Join waitlist
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:pt-0 pt-28 lg:flex-row justify-between items-center max-w-7xl space-y-8 lg:space-y-0">
        <div className="text-center lg:text-left lg:w-[60%]">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            The future of borderless banking <br /> and seamless payments
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            With access to foreign bank accounts, seamless payments, and
            competitive exchange rates, Fonnd empowers you to expand your
            financial reach and access new markets like never before.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="px-4 py-2 outline-none rounded-md bg-gray-800 placeholder-gray-400 text-white w-full sm:w-auto"
            />
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 outline-none rounded-md bg-gray-800 placeholder-gray-400 text-white w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-2 py-2 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 w-full sm:w-[120px]"
            >
              Join waitlist
            </button>
          </form>
        </div>

        {/* Background Globe */}
        <div className="relative flex">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_640.png"
            alt="Globe"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] object-contain animate-pulse opacity-90"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 text-gray-300 animate-bounce text-sm md:text-base">
        Scroll ↓
      </div>
    </div>
  );
};

export default Hero35;
