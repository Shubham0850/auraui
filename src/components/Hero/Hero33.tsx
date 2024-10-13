"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaPlay } from "react-icons/fa"; // Import FaPlay
import Link from "next/link";
import Image from "next/image";

// Array of menu items with names and links
const menuItems = [
  { name: "Products", link: "/products" },
  { name: "Features", link: "/features" },
  { name: "Pricing", link: "/pricing" },
  { name: "Support", link: "/support" },
];

const commonStyles = {
  button:
    "inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-white transition-all duration-200 border border-transparent rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-700",
  headerButton:
    "inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 border border-white rounded-full hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900",
  heroButton:
    "inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700",
  playButton:
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-200 border border-white lg:text-base lg:py-4 lg:px-8 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20",
  mobileMenu: "absolute left-0 right-0 bg-gray-900 rounded-lg shadow-lg mt-2", // Style for the mobile menu
};

const Hero33 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-gray-900 sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          <Link href="#" className="shrink-0">
            <Image
              className="w-auto h-8"
              src="https://www.auraui.com/logo-dark.png"
              alt="Logo"
              height={200}
              width={200}
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className={commonStyles.button}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
            <Link href="#" className={commonStyles.headerButton}>
              Start free trial
            </Link>
          </div>
          <div className="flex ml-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2.5 text-white duration-200 border border-white rounded-full hover:bg-white hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {expanded && (
        <div className={commonStyles.mobileMenu}>
          <div className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className={commonStyles.button}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <section className="pt-12 pb-48 overflow-hidden bg-gray-900 sm:pb-80 sm:pt-16 lg:pt-20 xl:pt-24 xl:pb-96">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl sm:tracking-tight">
              Grow SaaS Fast
            </h1>
            <p className="mt-6 text-lg leading-7 text-white lg:leading-8 lg:text-xl">
              Clarity gives you the blocks & components you need to create a
              truly professional website.
            </p>
            <div className="mt-8">
              <Link href="#" className={commonStyles.heroButton}>
                Get 14 Days Free Trial
              </Link>
            </div>
            <p className="mt-8 text-sm font-normal text-gray-400">
              No credit card required • Cancel anytime
            </p>
          </div>
          <div className="relative mt-12 sm:mt-16 lg:mt-20">
            <img
              src="https://images.pexels.com/photos/8355405/pexels-photo-8355405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Video Mockup"
              className="rounded-3xl border-4 border-blue-500 p-4"
            />
            <div className="absolute inset-0 grid w-full h-full mt-20 sm:mt-36 lg:mt-40 xl:mt-44 place-items-center">
              <button type="button" className={commonStyles.playButton}>
                <FaPlay className="w-auto h-4 mr-3 -ml-1 lg:h-5" />
                Play 1 min video
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero33;
