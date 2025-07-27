import React from "react";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const commonStyles = {
  container: "relative bg-gradient-to-b from-green-50 to-green-100",
  header: "inset-x-0 top-0 z-40 bg-white/70 backdrop-blur-md shadow-md",
  headerInner: "px-4 mx-auto sm:px-6 lg:px-8",
  headerContent: "flex items-center justify-between h-16 lg:h-20",
  logo: "w-auto h-8",
  navButton:
    "inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden rounded focus:bg-gray-800 hover:bg-gray-800",
  navMenu:
    "hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10",
  navLink:
    "text-base text-black transition-all duration-200 hover:text-opacity-80 font-medium",
  section: "overflow-hidden pt-28 lg:pt-36",
  contentContainer:
    "flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]",
  textContainer: "flex items-center justify-center w-full lg:order-2 lg:w-7/12",
  textContent:
    "h-full px-4 pt-12 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-20 lg:pb-14",
  heading:
    "text-4xl font-bold text-black sm:text-6xl xl:text-7xl leading-tight tracking-tight",
  paragraph: "mt-6 text-base text-black sm:text-xl max-w-2xl",
  appLinks: "mt-10 border-t-2 border-black lg:mt-auto sm:mt-16",
  appLinkContainer: "pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14",
  appLinkText: "text-base font-semibold text-black",
  appLinkIcons: "flex items-center mt-5 space-x-5 sm:mt-0",
  appLinkIcon:
    "block transition-all duration-200 hover:opacity-80 focus:opacity-80",
  appIcon: "w-auto rounded h-14 sm:h-16",
  imageContainer:
    "relative w-full overflow-hidden lg:w-5/12 lg:order-1 px-6 lg:px-0",
  image: "w-full h-auto max-w-[500px] mx-auto",
};

function Hero29() {
  return (
    <div className={commonStyles.container}>
      <header className={commonStyles.header}>
        <div className={commonStyles.headerInner}>
          <div className={commonStyles.headerContent}>
            {/* Logo */}
            <a
              href="#"
              title="AuraUI"
              className="flex-shrink-0 flex items-center"
            >
              <img
                className={commonStyles.logo}
                src="https://www.auraui.com/logo-light.png"
                alt="AuraUI Logo"
              />
            </a>

            {/* Mobile Nav Toggle (Static Demo) */}
            <button type="button" className={commonStyles.navButton}>
              <FaBars className="block w-5 h-5 mr-2" />
              Menu
            </button>

            {/* Desktop Nav */}
            <nav className={commonStyles.navMenu}>
              {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  title={item}
                  className={commonStyles.navLink}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button
              asChild
              className="hidden lg:inline-flex rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition-all"
            >
              <a href="#" title="Try AuraUI for free">
                Try for free
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={commonStyles.section}>
        <div className={commonStyles.contentContainer}>
          {/* Text Section */}
          <div className={commonStyles.textContainer}>
            <div className={commonStyles.textContent}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h1 className={commonStyles.heading}>
                    Take control <br />
                    of your UI experience <br />
                    with AuraUI.
                  </h1>
                  <p className={commonStyles.paragraph}>
                    AuraUI helps you build beautiful, responsive web interfaces
                    effortlessly. Focus on your creativity while we handle the
                    design.
                  </p>
                  <Button
                    asChild
                    className="mt-8 px-6 py-5 bg-green-400 hover:bg-green-500 text-black text-base rounded-full"
                  >
                    <a href="#" title="Get started with AuraUI">
                      Get started for free
                    </a>
                  </Button>
                </div>

                {/* App Store Links */}
                <div className={commonStyles.appLinks}>
                  <div className={commonStyles.appLinkContainer}>
                    <p className={commonStyles.appLinkText}>Available on</p>
                    <div className={commonStyles.appLinkIcons}>
                      <a
                        href="#"
                        title="Download on the App Store"
                        className={commonStyles.appLinkIcon}
                      >
                        <img
                          className={commonStyles.appIcon}
                          src="https://www.auraui.com/memeimage/app-store-button.png"
                          alt="App Store"
                        />
                      </a>
                      <a
                        href="#"
                        title="Get it on Google Play"
                        className={commonStyles.appLinkIcon}
                      >
                        <img
                          className={commonStyles.appIcon}
                          src="https://www.auraui.com/memeimage/play-store-button.png"
                          alt="Google Play"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={commonStyles.imageContainer}>
            <img
              className={commonStyles.image}
              src="https://www.auraui.com/memeimage/phone-mockup.png"
              alt="Mobile UI mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero29;
