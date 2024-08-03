import React, { useState } from "react";
import { FaBars, FaTimes, FaStar } from "react-icons/fa";

// Define common styles as a JavaScript object
const commonStyles = {
  link: "inline-flex items-center text-2xl font-bold text-gray-900 space-x-2",
  navLink:
    "inline-flex items-center text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-70 focus:outline-none focus:shadow-none",
  button:
    "inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:bg-gray-700",
};

const Hero13: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="bg-gray-50">
      <header className="relative z-10 py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" title="Auraui" className={commonStyles.link}>
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FaTimes className="w-7 h-7" />
                ) : (
                  <FaBars className="w-7 h-7" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
              {["Features", "Pricing", "Support"].map((item) => (
                <a
                  href="#"
                  key={item}
                  title={item}
                  className={commonStyles.navLink}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex">
              <a href="#" title="Try for free" className={commonStyles.button}>
                Try for free
              </a>
            </div>
          </div>

          {expanded && (
            <nav className="px-1 py-8">
              <div className="grid gap-y-7">
                {["Features", "Pricing", "Support"].map((item) => (
                  <a
                    href="#"
                    key={item}
                    title={item}
                    className={commonStyles.navLink}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  title="Try for free"
                  className={commonStyles.button}
                >
                  Try for free
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <img
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                Auraui: Your Ultimate Frontend Toolkit
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                Auraui helps you build clean, efficient, and beautiful web
                applications with ease. Experience the power of our components
                library today.
              </p>

              <a
                href="#"
                title="Try our free editor"
                className={`${commonStyles.button} mt-8 sm:mt-10`}
                role="button"
              >
                Try our free editor
              </a>

              <div className="mt-8 sm:mt-16">
                <div className="flex items-center justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-[#FDB241]" />
                  ))}
                </div>

                <blockquote className="mt-6">
                  <p className="text-lg font-bold text-gray-900 font-pj">
                    Best code editor in the market!
                  </p>
                  <p className="mt-3 text-base leading-7 text-gray-600 font-inter">
                    Auraui&apos;s editor provides a seamless experience, allowing you
                    to focus on writing clean and efficient code.
                  </p>
                </blockquote>

                <div className="flex items-center justify-center mt-3 lg:justify-start">
                  <img
                    className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                    alt="Denny Jones"
                  />
                  <p className="ml-2 text-base font-bold text-gray-900 font-pj">
                    Denny Jones
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1">
              <img
                className="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                alt="Auraui Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero13;
