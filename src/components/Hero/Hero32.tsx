import React from "react";
import { LuMenu, LuPlay, LuX } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />;
};

const PlayIcon = () => <LuPlay className="h-5 w-5 mr-2" />;

const commonStyles = {
  anchor:
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
  buttonPrimary:
    "inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  buttonSecondary:
    "inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900",
};

type Props = {};

function Hero32({}: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                title="Home"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Image
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="logo"
                  width={200}
                  height={200}
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <MenuIcon isOpen={menuOpen} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              {["Features", "Pricing", "Automation"].map((item) => (
                <Link
                  href="#"
                  title={item}
                  key={item}
                  className={commonStyles.anchor}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Sign Up and Customer Login */}
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <Link
                href="#"
                title="Customer Login"
                className={commonStyles.anchor}
              >
                Customer Login
              </Link>
              <Link
                href="#"
                title="Sign up"
                className={commonStyles.buttonPrimary}
                role="button"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  {["Features", "Pricing", "Automation", "Customer Login"].map(
                    (item) => (
                      <Link
                        href="#"
                        title={item}
                        key={item}
                        className={`flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${
                          item === "Sign up" ? "bg-gray-900 text-white" : ""
                        }`}
                      >
                        {item}
                      </Link>
                    )
                  )}
                  <Link
                    href="#"
                    title="Sign up"
                    className={commonStyles.buttonPrimary}
                    role="button"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Turn your visitors to Use
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> auraUI </span>
              </span>
            </p>
            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                href="#"
                title="Get more customers"
                className={commonStyles.buttonPrimary}
                role="button"
              >
                Get more auraUI
              </Link>
              <Link
                href="#"
                title="Watch free demo"
                className={commonStyles.buttonSecondary}
                role="button"
              >
                <PlayIcon />
                Use free auraUI
              </Link>
            </div>
            <p className="mt-8 text-base text-gray-500 font-inter">
              Some are free Components · No credit card required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero32;
