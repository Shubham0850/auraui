import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";
import { GiAbstract051 } from "react-icons/gi";

// Common styles
const commonStyles = {
  button:
    "inline-flex items-center px-6 py-2 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  link: "text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600",
  sectionTitle: "text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl",
  card: "relative flex flex-col overflow-hidden bg-white border border-gray-100 shadow rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200",
  cardImage:
    "object-cover w-full h-full transition-transform duration-200 transform group-hover:scale-110",
  cardContent: "text-lg font-bold text-gray-900",
  cardDescription:
    "mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3",
  cardFooter: "flex items-center justify-between",
  formInput:
    "block w-full px-4 py-3 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900",
  formButton:
    "inline-flex items-center justify-center w-full px-8 py-3 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
};

function Hero27() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://your-domain.com/path-to-your-logo.svg"
                  alt="Auraui logo"
                />
              </a>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <FaTimes className="w-7 h-7" />
                ) : (
                  <FaBars className="w-7 h-7" />
                )}
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10">
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
            <div className="hidden md:block">
              <a
                href="#"
                title=""
                className={commonStyles.button}
                role="button"
              >
                Join Email List
              </a>
            </div>
          </nav>
          {expanded && (
            <nav>
              <div className="px-1 pt-8 pb-4">
                <div className="grid gap-y-6">
                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-gray-900 transition-all duration-200"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-gray-900 transition-all duration-200"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-gray-900 transition-all duration-200"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    title=""
                    className={commonStyles.button}
                    role="button"
                  >
                    Join Email List
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h1 className={commonStyles.sectionTitle}>
                Join the Auraui community{" "}
                <span className="inline">
                  <GiAbstract051 className="inline w-auto h-8 sm:h-10 lg:h-12" />
                </span>{" "}
                of innovators and creators
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
                Discover and connect with like-minded individuals in the Auraui
                ecosystem. Stay updated with the latest innovations and
                community news.
              </p>
              <div className="w-auto h-4 mt-8 text-gray-300">
                <FaArrowRight />
              </div>
              <p className="mt-8 text-base font-bold text-gray-900">
                Join us to receive free updates every week
              </p>
              <form action="#" method="post" className="relative mt-4">
                <div className="absolute transition-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={commonStyles.formInput}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <button type="submit" className={commonStyles.formButton}>
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
          <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="flex justify-start w-full gap-6 pb-8 overflow-x-auto snap-x">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                >
                  <div className={commonStyles.card}>
                    <a
                      href="#"
                      title=""
                      className="flex shrink-0 aspect-w-4 aspect-h-3"
                    >
                      <img
                        className={commonStyles.cardImage}
                        src={`https://your-domain.com/path-to-thumbnail-${item}.png`}
                        alt={`thumbnail-${item}`}
                      />
                    </a>
                    <div className="flex-1 px-4 py-5 sm:p-6">
                      <a href="#" title="">
                        <p className={commonStyles.cardContent}>
                          How to leverage Auraui for success
                        </p>
                        <p className={commonStyles.cardDescription}>
                          Discover how Auraui&apos;s innovative tools and community
                          support can help you achieve your goals and elevate
                          your projects.
                        </p>
                      </a>
                    </div>
                    <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                      <div className={commonStyles.cardFooter}>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#" title="" className="">
                              Insights
                            </a>
                          </p>
                          <span className="text-sm font-medium text-gray-900">
                            •
                          </span>
                          <p className="text-sm font-medium text-gray-900">
                            5 Mins Read
                          </p>
                        </div>
                        <a href="#" title="" className="" role="button">
                          <FiChevronRight className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero27;
