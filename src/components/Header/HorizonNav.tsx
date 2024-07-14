import React from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const styles = {
  link: "text-base font-medium text-white transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70",
  mobileLink:
    "flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70",
  joinButton:
    "inline-flex items-center justify-center w-auto px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500",
};

const HorizonNav = () => {
  return (
    <header className="bg-black">
      <div className="relative">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="#" title="Home" className="flex">
                <img
                  className="w-auto h-8 lg:h-10"
                  src="https://www.auraui.com/logo-light.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              <FaBars className="w-6 h-6" />
            </button>
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link href="#" className={styles.link} title="Features">
                Features
              </Link>
              <Link href="#" className={styles.link} title="Solutions">
                Solutions
              </Link>
              <Link href="#" className={styles.link} title="Resources">
                Resources
              </Link>
              <Link href="#" className={styles.link} title="Pricing">
                Pricing
              </Link>
            </div>
            <Link href="#" className={styles.joinButton} role="button">
              Join Now
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
        <button
          type="button"
          className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <div className="flex flex-col flex-grow h-full">
          <nav className="flex flex-col flex-1 mt-10 space-y-2">
            <Link href="#" className={styles.mobileLink} title="Features">
              Features
            </Link>
            <Link href="#" className={styles.mobileLink} title="Solutions">
              Solutions
            </Link>
            <Link href="#" className={styles.mobileLink} title="Resources">
              Resources
            </Link>
            <Link href="#" className={styles.mobileLink} title="Pricing">
              Pricing
            </Link>
          </nav>
          <div className="flex flex-col items-start">
            <Link href="#" className={styles.joinButton} role="button">
              Join Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HorizonNav;
