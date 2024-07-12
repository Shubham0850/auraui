import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type Props = {};

const CallToAction: React.FC<Props> = (props) => {
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
            <a href="#" title="Aura UI" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://www.auraui.com/logo-dark.png"
                alt="Aura UI Logo"
              />
            </a>
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
            <a
              href="#"
              title="Features"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Features
            </a>
            <a
              href="#"
              title="Solutions"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Solutions
            </a>
            <a
              href="#"
              title="Resources"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Resources
            </a>
            <a
              href="#"
              title="Pricing"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Pricing
            </a>
          </div>
        </nav>

        {/* xs to lg */}
        {isMenuOpen && (
          <nav className=" px-4 py-5 text-center bg-black md:hidden">
         

            <div className="flex flex-col items-center  space-y-2">
              <a
                href="#"
                title="Features"
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Features
              </a>
              <a
                href="#"
                title="Solutions"
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Solutions
              </a>
              <a
                href="#"
                title="Resources"
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Resources
              </a>
              <a
                href="#"
                title="Pricing"
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Pricing
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default CallToAction;
