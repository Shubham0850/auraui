import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function Hero10() {
  const [expanded, setExpanded] = useState(false);

  const commonClasses = {
    navLink:
      "text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600",
    articleLink:
      "overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1",
    button:
      "inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  };

  const navLinks = ["Features", "Pricing", "Support"];
  const articles = [
    {
      title: "Boost your design workflow with AuraUI",
      category: "Design",
      date: "August 21, 2024",
      imgSrc: "https://www.auraui.com/memeimage/woman1.jpg",
    },
    {
      title: "The future of component libraries with AuraUI",
      category: "Development",
      date: "August 19, 2024",
      imgSrc: "https://www.auraui.com/memeimage/hero8.jpg",
    },
    {
      title: "How AuraUI enhances UI/UX design",
      category: "UX/UI",
      date: "August 18, 2024",
      imgSrc: "https://www.auraui.com/memeimage/laptop-working-men.jpg",
    },
  ];

  return (
    <div className="relative">
      <header className="absolute inset-x-0 top-0 z-10 py-4 bg-transparent sm:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" title="AuraUI" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI Logo"
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
                {!expanded ? (
                  <HiOutlineBars3 className="w-7 h-7" />
                ) : (
                  <RxCross2 className="w-7 h-7" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10">
              {navLinks.map((link) => (
                <a href="#" key={link} className={commonClasses.navLink}>
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {expanded && (
            <nav className="px-1 pt-8 pb-4">
              <div className="grid gap-y-6">
                {navLinks.map((link) => (
                  <a href="#" key={link} className={commonClasses.navLink}>
                    {link}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white"></div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="flex justify-center items-center px-4 pb-16 bg-white pt-28 sm:px-6 lg:px-8 lg:pb-24 xl:pr-12">
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="text-5xl sm:text-6xl lg:text-7xl">⚡️</p>
              <h1 className="mt-10 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Accelerate Your Design with AuraUI.
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-500">
                Discover how AuraUI empowers developers to build stunning,
                high-performance React websites effortlessly.
              </p>
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="#" className={commonClasses.button}>
                  Read Exclusive Blog
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-end px-4 py-16 bg-gray-900 sm:px-6 lg:pb-24 lg:px-8 xl:pl-12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="https://www.auraui.com/memeimage/grid-pattern.svg"
                alt="Grid Pattern"
              />
            </div>

            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <p className="text-lg font-bold text-white">Featured Articles</p>

              <div className="mt-6 space-y-5">
                {articles.map(({ title, category, date, imgSrc }, index) => (
                  <div key={index} className={commonClasses.articleLink}>
                    <div className="px-4 py-5 sm:p-5">
                      <div className="flex items-start lg:items-center">
                        <a href="#" title={title} className="shrink-0">
                          <img
                            className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cover"
                            src={imgSrc}
                            alt={title}
                          />
                        </a>

                        <div className="flex-1 ml-4 lg:ml-6">
                          <p className="text-xs font-medium text-gray-900 lg:text-sm">
                            <a href="#" title={category}>
                              {category}
                            </a>
                          </p>
                          <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                            <a href="#" title={title}>
                              {title}
                            </a>
                          </p>
                          <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                            {date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero10;
