import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";

const commonStyles = {
  container: "bg-gray-900",
  header: "py-4 sm:py-6",
  navContainer: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  nav: "flex items-center justify-between",
  logo: "w-auto h-8",
  mobileMenuButton:
    "p-1 text-gray-200 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-gray-900 focus:ring-offset-2",
  navItems: "hidden md:flex md:items-center md:justify-end md:space-x-12",
  navLink:
    "text-base font-medium text-gray-300 transition-all duration-200 hover:text-white",
  mobileNav: "px-1 py-5",
  gridImages: "grid grid-cols-3 gap-8 md:max-w-md lg:max-w-none",
  image: "object-cover w-full h-full rounded-lg",
  textContainer: "max-w-lg",
  title: "text-2xl font-bold text-white sm:text-3xl",
  author: "flex items-center mt-7",
  authorImage: "object-cover w-5 h-5 rounded-full shrink-0",
  authorText: "flex-1 ml-3 text-base font-medium text-gray-400",
  list: "mt-4 space-y-3",
  listItem: "flex items-center space-x-3",
  listIcon: "text-sm shrink-0",
  listText: "flex-1 text-sm font-medium text-white",
  form: "max-w-md mt-14",
  formInput:
    "block w-full px-0 py-2 text-base font-medium text-white placeholder-gray-500 bg-transparent border-t-0 border-b border-l-0 border-r-0 border-gray-700 rounded-none focus:border-white focus:outline-none focus:ring-0",
  button:
    "inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900 hover:bg-gray-100",
};

function Nft2() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={commonStyles.container}>
      <header className={commonStyles.header}>
        <div className={commonStyles.navContainer}>
          <nav className={commonStyles.nav}>
            <div className="shrink-0">
              <a href="#" title="Auraui" className="flex items-center">
                <img
                  className={commonStyles.logo}
                  src="https://example.com/auraui-logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className={commonStyles.mobileMenuButton}
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className={commonStyles.navItems}>
              <a href="#" title="About Auraui" className={commonStyles.navLink}>
                {" "}
                About{" "}
              </a>
              <a href="#" title="Auraui NFTs" className={commonStyles.navLink}>
                {" "}
                Our NFTs{" "}
              </a>
            </div>
          </nav>

          {expanded && (
            <nav className={commonStyles.mobileNav}>
              <div className="grid gap-y-6">
                <a
                  href="#"
                  title="About Auraui"
                  className={commonStyles.navLink}
                >
                  {" "}
                  About{" "}
                </a>
                <a
                  href="#"
                  title="Auraui NFTs"
                  className={commonStyles.navLink}
                >
                  {" "}
                  Our NFTs{" "}
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="py-12 sm:py-16 lg:pb-20">
        <div className={commonStyles.navContainer}>
          <div className="grid items-center max-w-6xl grid-cols-1 mx-auto lg:grid-cols-5 lg:gap-x-4 xl:gap-x-24 gap-y-12">
            <div className="lg:col-span-3">
              <div className={commonStyles.textContainer}>
                <h1 className={commonStyles.title}>
                  Explore Auraui&apos;s Exclusive NFT Collection – Unique digital
                  assets on the Ethereum blockchain.
                </h1>
                <div className={commonStyles.author}>
                  <img
                    className={commonStyles.authorImage}
                    src="https://example.com/auraui-avatar.png"
                    alt="Auraui Creator"
                  />
                  <p className={commonStyles.authorText}>
                    Crafted by <span className="text-white">Auraui Team</span>
                  </p>
                </div>

                <p className="mt-12 text-base font-bold text-white">
                  Join our community to:
                </p>
                <ul className={commonStyles.list}>
                  <li className={commonStyles.listItem}>
                    <span className={commonStyles.listIcon}>💸</span>
                    <span className={commonStyles.listText}>
                      Receive exclusive discounts on NFT drops
                    </span>
                  </li>
                  <li className={commonStyles.listItem}>
                    <span className={commonStyles.listIcon}>🎁</span>
                    <span className={commonStyles.listText}>
                      Get surprise gifts with each purchase
                    </span>
                  </li>
                  <li className={commonStyles.listItem}>
                    <span className={commonStyles.listIcon}>⌛️</span>
                    <span className={commonStyles.listText}>
                      Access special offers on new releases
                    </span>
                  </li>
                </ul>

                <form action="#" method="POST" className={commonStyles.form}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                      <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="sr-only">
                          {" "}
                          First Name{" "}
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className={commonStyles.formInput}
                          placeholder="First Name"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="email" className="sr-only">
                          {" "}
                          Email Address{" "}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={commonStyles.formInput}
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div>
                      <button type="submit" className={commonStyles.button}>
                        Join Waiting List
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className={commonStyles.gridImages}>
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image1.png"
                  alt="NFT Image 1"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image2.png"
                  alt="NFT Image 2"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image3.png"
                  alt="NFT Image 3"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image4.png"
                  alt="NFT Image 4"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image5.png"
                  alt="NFT Image 5"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image6.png"
                  alt="NFT Image 6"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image7.png"
                  alt="NFT Image 7"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image8.png"
                  alt="NFT Image 8"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image9.png"
                  alt="NFT Image 9"
                />
                <img
                  className={commonStyles.image}
                  src="https://example.com/nft-image10.png"
                  alt="NFT Image 10"
                />
                <div className="bg-gray-700 rounded-lg"></div>
                <div className="bg-gray-800 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nft2;
