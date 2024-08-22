import React from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineCreditCard,
  HiOutlineCheckCircle,
  HiOutlineLockClosed,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

function Hero24() {
  const styles = {
    container: "bg-gradient-to-b from-[#101212] to-[#08201D] relative",
    header: "absolute inset-x-0 top-0 z-10 w-full",
    headerContent: "px-4 mx-auto sm:px-6 lg:px-8",
    headerFlex: "flex items-center justify-between h-16 lg:h-20",
    logo: "w-auto h-8 mr-8",
    navLinks: "hidden lg:flex lg:items-center lg:justify-center lg:space-x-10",
    navLink:
      "text-base text-white transition-all duration-200 hover:text-opacity-80",
    actionBtns:
      "lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto",
    loginBtn:
      "hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80",
    applyBtn:
      "inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg",
    menuBtn:
      "inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800",
    section:
      "relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24",
    sectionContent: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20",
    title: "text-4xl font-bold sm:text-6xl",
    titleGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white",
    description: "mt-5 text-base text-white sm:text-xl",
    ctaBtn:
      "inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700",
    statsGrid:
      "grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0",
    statItem: "flex items-center",
    statIcon: "w-8 h-8 text-[#28CC9D]",
    statText: "ml-3 text-sm text-white",
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerFlex}>
            <div className="flex-shrink-0">
              <a href="#" title="AuraUI" className="flex">
                <img
                  className={styles.logo}
                  src="https://www.auraui.com/logo-dark.png"
                  alt="AuraUI Logo"
                />
              </a>
            </div>
            <div className={styles.navLinks}>
              <a href="#" title="Features" className={styles.navLink}>
                Features
              </a>
              <a href="#" title="Solutions" className={styles.navLink}>
                Solutions
              </a>
              <a href="#" title="Resources" className={styles.navLink}>
                Resources
              </a>
              <a href="#" title="Pricing" className={styles.navLink}>
                Pricing
              </a>
            </div>
            <div className={styles.actionBtns}>
              <a href="#" title="Log in" className={styles.loginBtn}>
                Log in
              </a>
              <a
                href="#"
                title="Apply for free"
                className={styles.applyBtn}
                role="button"
              >
                Apply for free
              </a>
            </div>
            <button type="button" className={styles.menuBtn}>
              <HiOutlineMenuAlt3 className="block w-6 h-6" />
              <HiOutlineX className="hidden w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className="max-w-xl mx-auto text-center">
            <h1 className={styles.title}>
              <span className={styles.titleGradient}>
                Simplifying web development with AuraUI
              </span>
            </h1>
            <p className={styles.description}>
              Experience the ultimate toolkit for building modern,
              high-performance websites effortlessly. Empower your projects with
              AuraUI.
            </p>
            <a
              href="#"
              title="Get Started"
              className={styles.ctaBtn}
              role="button"
            >
              Get Started
              <FaArrowRight className="w-6 h-6 ml-8 -mr-2" />
            </a>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <HiOutlineCreditCard className={styles.statIcon} />
                <p className={styles.statText}>
                  Trusted by developers worldwide
                </p>
              </div>
              <div className={styles.statItem}>
                <HiOutlineCheckCircle className={styles.statIcon} />
                <p className={styles.statText}>
                  Seamless integration with Next.js
                </p>
              </div>
              <div className={styles.statItem}>
                <HiOutlineLockClosed className={styles.statIcon} />
                <p className={styles.statText}>Secure and optimized codebase</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero24;
