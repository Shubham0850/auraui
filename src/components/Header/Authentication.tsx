import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const styles = {
  link: "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
};

const Authentication = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <Link href="#" title="Aura UI" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://www.auraui.com/logo-light.png"
                alt="Aura UI Logo"
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md xl:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
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

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link href="#" className={styles.link} title="Sign up">
              Sign up
            </Link>
            <Link href="#" className={styles.link} title="Sign in">
              Sign in
            </Link>
          </div>
        </nav>

        {/* xs to lg */}
        {isMenuOpen && (
          <nav className="flex flex-col py-4 space-y-2 lg:hidden">
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Authentication;
