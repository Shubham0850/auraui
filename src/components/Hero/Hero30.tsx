import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";

const commonStyles = {
  container: "relative",
  header: "py-4 bg-black sm:py-6",
  headerInner: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headerContent: "flex items-center justify-between",
  logo: "w-auto h-9",
  navButton: "text-white",
  navMenu: "hidden md:flex md:items-center md:justify-end md:space-x-12",
  navLink:
    "text-base font-normal text-gray-400 transition-all duration-200 hover:text-white",
  mobileNav: "flex flex-col pt-8 pb-4 space-y-6",
  section: "py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24",
  contentContainer: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  heading:
    "text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl",
  gradientText:
    "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500",
  paragraph: "max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8",
  buttonContainer:
    "relative inline-flex items-center justify-center mt-8 sm:mt-12 group",
  button:
    "relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full",
  info: "inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14",
  infoIcon: "w-6 h-6",
  infoText: "ml-2 text-base font-normal text-white",
  imageContainer: "mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0",
  image: "w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl",
};

function Hero30() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={commonStyles.container}>
      <header className={commonStyles.header}>
        <div className={commonStyles.headerInner}>
          <div className={commonStyles.headerContent}>
            <div className="shrink-0">
              <a href="#" title="Auraui" className="flex">
                <img
                  className={commonStyles.logo}
                  src="https://your-logo-url.com/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className={commonStyles.navButton}
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <FaBars className="w-7 h-7" />
                ) : (
                  <FaTimes className="w-7 h-7" />
                )}
              </button>
            </div>

            <nav className={commonStyles.navMenu}>
              <a href="#" title="Products" className={commonStyles.navLink}>
                Products
              </a>
              <a href="#" title="Features" className={commonStyles.navLink}>
                Features
              </a>
              <a href="#" title="Pricing" className={commonStyles.navLink}>
                Pricing
              </a>
              <a href="#" title="Support" className={commonStyles.navLink}>
                Support
              </a>
            </nav>
          </div>
        </div>

        {expanded && (
          <nav className={commonStyles.mobileNav}>
            <a href="#" title="Products" className={commonStyles.navLink}>
              Products
            </a>
            <a href="#" title="Features" className={commonStyles.navLink}>
              Features
            </a>
            <a href="#" title="Pricing" className={commonStyles.navLink}>
              Pricing
            </a>
            <a href="#" title="Support" className={commonStyles.navLink}>
              Support
            </a>
          </nav>
        )}
      </header>

      <section className={commonStyles.section}>
        <div className={commonStyles.contentContainer}>
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                A Hub for Designers, Developers & Marketers
              </p>
              <h1 className={`${commonStyles.heading}`}>
                <span className={commonStyles.gradientText}>
                  Unlimited Design
                </span>{" "}
                Inspiration
              </h1>
              <p className={commonStyles.paragraph}>
                Auraui provides endless inspiration for your design projects
                with AI-driven recommendations and curated collections.
              </p>
              <div className={commonStyles.buttonContainer}>
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="#"
                  title="Start Exploring Inspiration"
                  className={commonStyles.button}
                  role="button"
                >
                  Start Exploring Inspiration{" "}
                  <IoArrowForward className="ml-2" />
                </a>
              </div>

              <div>
                <div className={commonStyles.info}>
                  <MdDesignServices className={commonStyles.infoIcon} />
                  <span className={commonStyles.infoText}>
                    42 new design inspirations were added last week
                  </span>
                </div>
              </div>
            </div>

            <div className={commonStyles.imageContainer}>
              <img
                className={commonStyles.image}
                src="https://your-image-url.com/illustration.png"
                alt="Design Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero30;
