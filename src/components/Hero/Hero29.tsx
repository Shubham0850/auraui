import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineGoogle } from "react-icons/ai";

const commonStyles = {
  container: "relative bg-gradient-to-b from-green-50 to-green-100",
  header: "absolute inset-x-0 top-0 z-10 w-full",
  headerInner: "px-4 mx-auto sm:px-6 lg:px-8",
  headerContent: "flex items-center justify-between h-16 lg:h-20",
  logo: "w-auto h-8",
  navButton:
    "inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800",
  navMenu:
    "hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10",
  navLink:
    "text-base text-black transition-all duration-200 hover:text-opacity-80",
  ctaButton:
    "inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white",
  section: "overflow-hidden",
  contentContainer:
    "flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]",
  textContainer: "flex items-center justify-center w-full lg:order-2 lg:w-7/12",
  textContent:
    "h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14",
  heading: "text-4xl font-bold text-black sm:text-6xl xl:text-7xl",
  paragraph: "mt-6 text-base text-black sm:text-xl",
  button:
    "inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400",
  appLinks: "mt-8 border-t-2 border-black lg:mt-auto sm:mt-14",
  appLinkContainer: "pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14",
  appLinkText: "text-base font-semibold text-black",
  appLinkIcons: "flex items-center mt-5 space-x-5 sm:mt-0",
  appLinkIcon:
    "block transition-all duration-200 hover:opacity-80 focus:opacity-80",
  appIcon: "w-auto rounded h-14 sm:h-16",
  imageContainer: "relative w-full overflow-hidden lg:w-5/12 lg:order-1",
  image: "w-full",
};

function Hero29() {
  return (
    <div className={commonStyles.container}>
      <header className={commonStyles.header}>
        <div className={commonStyles.headerInner}>
          <div className={commonStyles.headerContent}>
            <div className="flex-shrink-0">
              <a href="#" title="Auraui" className="flex">
                <img
                  className={commonStyles.logo}
                  src="https://your-logo-url.com/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <button type="button" className={commonStyles.navButton}>
              <FaBars className="block w-6 h-6 mr-2" />
              <FaTimes className="hidden w-6 h-6 mr-2" />
              Menu
            </button>

            <div className={commonStyles.navMenu}>
              <a href="#" title="Features" className={commonStyles.navLink}>
                Features
              </a>
              <a href="#" title="Solutions" className={commonStyles.navLink}>
                Solutions
              </a>
              <a href="#" title="Resources" className={commonStyles.navLink}>
                Resources
              </a>
              <a href="#" title="Pricing" className={commonStyles.navLink}>
                Pricing
              </a>
            </div>

            <a
              href="#"
              title="Try for free"
              className={commonStyles.ctaButton}
              role="button"
            >
              Try for free
            </a>
          </div>
        </div>
      </header>

      <section className={commonStyles.section}>
        <div className={commonStyles.contentContainer}>
          <div className={commonStyles.textContainer}>
            <div className={commonStyles.textContent}>
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h1 className={commonStyles.heading}>
                    Take control <br /> of your daily expenses
                  </h1>
                  <p className={commonStyles.paragraph}>
                    Auraui&apos;s advanced A.I. predicts your expenses based on
                    previous activities and offers tips on managing your
                    finances efficiently.
                  </p>
                  <a
                    href="#"
                    title="Get started for free"
                    className={commonStyles.button}
                    role="button"
                  >
                    Get started for free
                  </a>
                </div>

                <div className={commonStyles.appLinks}>
                  <div className={commonStyles.appLinkContainer}>
                    <p className={commonStyles.appLinkText}>App available on</p>
                    <div className={commonStyles.appLinkIcons}>
                      <a
                        href="#"
                        title="App Store"
                        className={commonStyles.appLinkIcon}
                        role="button"
                      >
                        <AiOutlineAppstore className={commonStyles.appIcon} />
                        <span className="sr-only">App Store</span>
                      </a>
                      <a
                        href="#"
                        title="Play Store"
                        className={commonStyles.appLinkIcon}
                        role="button"
                      >
                        <AiOutlineGoogle className={commonStyles.appIcon} />
                        <span className="sr-only">Play Store</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={commonStyles.imageContainer}>
            <img
              className={commonStyles.image}
              src="https://your-image-url.com/phone-mockup.png"
              alt="Phone Mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero29;