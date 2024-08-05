import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const commonStyles =
  "text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0";
const commonButtonStyles =
  "inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-lg";

const images = {
  logo: "https://www.auraui.com/logo-light.png",
  hero: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  latestPicks: [
    {
      src: "https://images.unsplash.com/photo-1626654386409-180d8880fca5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "How a visual artist redefines success in graphic design",
    },
    {
      src: "https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Exploring the future of NFTs in web development",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=",
      title: "The impact of blockchain on modern design",
    },
  ],
};

const Hero2: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" title="Auraui" className="flex">
                <Image
                  className="w-24  "
                  src={images.logo}
                  alt="Auraui Logo"
                  width={100}
                  height={100}
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
                  <FiX className="w-7 h-7" />
                ) : (
                  <FiMenu className="w-7 h-7" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:space-x-10 md:items-center md:justify-center">
              <a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
              >
                Services
              </a>
              <a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
              >
                Latest Collections
              </a>
              <a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
              >
                Blog
              </a>
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                className={`${commonButtonStyles} bg-gray-900 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
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
                  <a href="#" className={commonStyles}>
                    Services
                  </a>
                  <a href="#" className={commonStyles}>
                    Latest Collections
                  </a>
                  <a href="#" className={commonStyles}>
                    Blog
                  </a>
                  <a
                    href="#"
                    className={`${commonButtonStyles} bg-gray-900 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
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

      <section className="p-3 md:p-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Welcome to Auraui, your gateway to modern UI components.
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                Discover the latest in web design, NFT integration, and more
                with Auraui. Your one-stop solution for sleek and functional UI.
              </p>
              <div className="relative inline-flex mt-9 group">
                <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  role="button"
                >
                  Explore Auraui Blog
                </a>
              </div>
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                ⚡️ Latest Picks
              </p>
              <div className="mt-6 space-y-6 lg:space-y-8">
                {images.latestPicks.map((item, index) => (
                  <div key={index} className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <Image
                        className="object-cover w-12 h-12 rounded-lg"
                        src={item.src}
                        alt={item.title}
                        width={48}
                        height={48}
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                          {item.title}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-end lg:col-span-5">
              <Image
                className="w-full rounded-sm mx-auto"
                src={images.hero}
                alt="Auraui Hero"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
