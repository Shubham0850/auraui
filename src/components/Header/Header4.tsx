import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const styles = {
  link: "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
  mobileLink:
    "inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
  joinButton:
    "inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700",
};

const Header4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="#" title="Aura UI" className="flex">
              <Image
                className="w-auto h-8 lg:h-10"
                src="https://www.auraui.com/logo-light.png"
                alt="Aura UI Logo"
                height={200}
                width={200}
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden mr-6 lg:flex lg:items-center lg:ml-auto lg:space-x-10">
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
            Get started now
          </Link>
        </nav>

        {/* xs to lg */}
        {isMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
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
            </div>

            <div className="px-6  mt-6">
              <Link href="#" className={styles.joinButton} role="button">
                Get started now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header4;
