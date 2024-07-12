import React, { useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";

type Props = {};

const Simple: React.FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* lg+ */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-20">
            <div className="hidden xl:flex xl:items-center xl:space-x-10">
              <a
                href="#"
                title="Features"
                className="text-base font-medium text-black"
              >
                Features
              </a>
              <a
                href="#"
                title="Solutions"
                className="text-base font-medium text-black"
              >
                Solutions
              </a>
              <a
                href="#"
                title="Resources"
                className="text-base font-medium text-black"
              >
                Resources
              </a>
              <a
                href="#"
                title="Pricing"
                className="text-base font-medium text-black"
              >
                Pricing
              </a>
            </div>
            <div className="xl:absolute xl:-translate-x-1/2 xl:inset-y-5 xl:left-1/2">
              <div className="flex-shrink-0">
                <a href="#" title="Aura UI" className="flex">
                  <img
                    className="w-auto h-8 xl:h-10"
                    src="https://www.auraui.com/logo-light.png"
                    alt="Aura UI Logo"
                  />
                </a>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 xl:hidden"
            >
              <FiShoppingCart className="w-5 h-5" />
            </button>
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
            <div className="hidden xl:flex xl:items-center xl:space-x-10">
              <a
                href="#"
                title="Sign up"
                className="text-base font-medium text-black"
              >
                Sign up
              </a>
              <a
                href="#"
                title="Sign in"
                className="text-base font-medium text-black"
              >
                Sign in
              </a>
              <a
                href="#"
                title="Cart"
                className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
              >
                <FiShoppingCart className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* xs to lg */}
      {isMenuOpen && (
        <nav className="py-4 bg-white xl:hidden">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
           
            <div>
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  title="Features"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  Features
                </a>
                <a
                  href="#"
                  title="Solutions"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  title="Resources"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  Resources
                </a>
                <a
                  href="#"
                  title="Pricing"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  Pricing
                </a>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  title="Sign up"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  Sign up
                </a>
                <a
                  href="#"
                  title="Sign in"
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Simple;
