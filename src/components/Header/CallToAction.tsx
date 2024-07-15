import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const styles = {
  link: "text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70",
  mobileLink:
    "py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70",
};

const CallToAction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black border-b border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="#" className="flex" title="Aura UI">
              <Image
                className="w-auto h-8 lg:h-10"
                src="https://www.auraui.com/logo-dark.png"
                alt="Aura UI Logo"
                height={200}
                width={200}
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex md:items-center md:space-x-10">
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
        </nav>

        {/* xs to lg */}
        {isMenuOpen && (
          <nav className="px-4 py-5 text-center bg-black md:hidden">
            <div className="flex flex-col items-center space-y-2">
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default CallToAction;
