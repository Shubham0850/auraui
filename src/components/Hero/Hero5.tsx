import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const commonStyles = {
  button:
    "inline-flex items-center justify-center px-6 py-2 text-base font-semibold transition-all duration-200 rounded-lg",
  link: "text-base font-medium transition-all duration-200 hover:text-indigo-600",
  sectionTitle: "text-4xl font-bold text-gray-900 sm:text-5xl",
  sectionSubtitle: "mt-5 text-base font-normal leading-7 text-gray-500",
  listItem: "flex items-center",
  listItemIcon: "text-base ml-2.5",
  listItemText: "flex-1 text-base font-medium text-gray-900 ml-2.5",
  gradientButton:
    "relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
};

const Hero5 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <header className="absolute inset-x-0 top-0 z-10 py-4 bg-transparent sm:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://via.placeholder.com/150x40?text=Auraui+Logo"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
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

            <div className="hidden lg:flex lg:items-center lg:justify-start lg:ml-16 lg:mr-auto lg:space-x-10">
              <a href="#" title="" className={commonStyles.link}>
                Features
              </a>
              <a href="#" title="" className={commonStyles.link}>
                Pricing
              </a>
              <a href="#" title="" className={commonStyles.link}>
                Support
              </a>
            </div>

            <div className="hidden lg:flex">
              <a
                href="#"
                title=""
                className={`${commonStyles.button} text-white bg-gray-900 hover:bg-gray-700 focus:ring-gray-900`}
                role="button"
              >
                Get Design Inspirations
              </a>
            </div>
          </nav>

          {expanded && (
            <nav className="px-1 pt-8 pb-4">
              <div className="grid gap-y-6">
                <a
                  href="#"
                  title=""
                  className={`${commonStyles.link} flex items-center`}
                >
                  Features
                </a>
                <a
                  href="#"
                  title=""
                  className={`${commonStyles.link} flex items-center`}
                >
                  Pricing
                </a>
                <a
                  href="#"
                  title=""
                  className={`${commonStyles.link} flex items-center`}
                >
                  Support
                </a>
                <a
                  href="#"
                  title=""
                  className={`${commonStyles.button} text-white bg-gray-900 border-transparent hover:bg-gray-600`}
                  role="button"
                >
                  Get Design Inspiration
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative pb-12 bg-white pt-28 sm:pb-16 sm:pt-32 lg:pb-20 xl:pt-48 xl:pb-32">
        <div className="absolute inset-0">
          <img
            className="hidden object-cover w-full h-full md:block"
            src="https://via.placeholder.com/1200x800?text=Hero+Background"
            alt="Hero Background"
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex">
            <div className="w-full md:max-w-xs lg:max-w-md">
              <h1 className={commonStyles.sectionTitle}>
                Explore the Future with Auraui
              </h1>
              <p className={commonStyles.sectionSubtitle}>
                Stay updated with the latest in web3 and decentralized finance.
                Discover new opportunities and insights with our weekly updates.
              </p>

              <p className="mt-10 text-base font-bold text-gray-900">
                Join our newsletter to:
              </p>
              <ul className="mt-4 space-y-4">
                <li className={commonStyles.listItem}>
                  <AiOutlineArrowRight className={commonStyles.listItemIcon} />
                  <span className={commonStyles.listItemText}>
                    Receive Weekly Updates on Web3 Innovations
                  </span>
                </li>
                <li className={commonStyles.listItem}>
                  <AiOutlineArrowRight className={commonStyles.listItemIcon} />
                  <span className={commonStyles.listItemText}>
                    Get Exclusive Access to New Features and Resources
                  </span>
                </li>
                <li className={commonStyles.listItem}>
                  <AiOutlineArrowRight className={commonStyles.listItemIcon} />
                  <span className={commonStyles.listItemText}>
                    Be Featured in Our Spotlight Stories
                  </span>
                </li>
              </ul>

              <div className="relative inline-flex mt-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <a
                  href="#"
                  title=""
                  className={commonStyles.gradientButton}
                  role="button"
                >
                  Join Newsletter For Free
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:hidden sm:mt-16">
          <img
            className="object-cover w-full h-full"
            src="https://via.placeholder.com/800x600?text=Hero+Background+Mobile"
            alt="Hero Background Mobile"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero5;
