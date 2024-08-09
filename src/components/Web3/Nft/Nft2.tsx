import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const nftImages = [
  { src: "/web3Images/nft/nft1.png", alt: "NFT Image 1" },
  { src: "/web3Images/nft/nft2.png", alt: "NFT Image 2" },
  { src: "/web3Images/nft/nft3.jpeg", alt: "NFT Image 3" },
  { src: "/web3Images/nft/nft4.jpeg", alt: "NFT Image 4" },
  { src: "/web3Images/nft/nft5.jpeg", alt: "NFT Image 5" },
  { src: "/web3Images/nft/nft6.jpeg", alt: "NFT Image 6" },
  { src: "/web3Images/nft/nft14.jpeg", alt: "NFT Image 7" },
  { src: "/web3Images/nft/nft13.jpeg", alt: "NFT Image 8" },
  { src: "/web3Images/nft/nft1.png", alt: "NFT Image 9" },
];

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
  gridImages: "grid grid-cols-3 gap-3 md:max-w-md lg:max-w-none",
  imageContainer: "relative w-full  ",
  textContainer: "max-w-lg",
  title: "text-2xl font-bold text-white sm:text-3xl",
  author: "flex items-center mt-7",
  authorImage: "relative w-5 h-5 rounded-full shrink-0",
  authorText: "flex-1 ml-3 text-base font-medium text-gray-400",
  list: "mt-4 space-y-3",
  listItem: "flex items-center space-x-3",
  listIcon: "text-xl text-white shrink-0",
  listText: "flex-1 text-sm font-medium text-white",
  form: "max-w-md mt-14",
  formInput:
    "block w-full px-0 py-2 text-base font-medium text-white placeholder-gray-500 bg-transparent border-b border-gray-700 focus:border-white focus:outline-none",
  button:
    "inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase  border  rounded-lg bg-sky-600 ",
};

function Nft2() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={commonStyles.container}>
      <header className={commonStyles.header}>
        <div className={commonStyles.navContainer}>
          <nav className={commonStyles.nav}>
            <div className="shrink-0">
              <Link href="#" title="Auraui" className="flex items-center">
                <Image
                  className={commonStyles.logo}
                  src="https://www.auraui.com/logo-dark.png"
                  alt="Auraui Logo"
                  width={100}
                  height={100}
                />
              </Link>
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
              <Link
                href="#"
                title="About Auraui"
                className={commonStyles.navLink}
              >
                About
              </Link>
              <Link
                href="#"
                title="Auraui NFTs"
                className={commonStyles.navLink}
              >
                Our NFTs
              </Link>
            </div>
          </nav>

          {expanded && (
            <nav className={commonStyles.mobileNav}>
              <div className="grid gap-y-6">
                <Link
                  href="#"
                  title="About Auraui"
                  className={commonStyles.navLink}
                >
                  About
                </Link>
                <Link
                  href="#"
                  title="Auraui NFTs"
                  className={commonStyles.navLink}
                >
                  Our NFTs
                </Link>
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
                  Explore Auraui&apos;s Exclusive NFT Collection – Unique
                  digital assets on the Ethereum blockchain.
                </h1>
                <div className={commonStyles.author}>
                  <div className={commonStyles.authorImage}>
                    <Image
                      src="/web3Images/nft/nft8.jpeg"
                      alt="Auraui Creator"
                      layout="fill"
                    />
                  </div>
                  <p className={commonStyles.authorText}>
                    Crafted by <span className="text-white">Auraui Team</span>
                  </p>
                </div>

                <p className="mt-12 text-base font-bold text-white">
                  Join our community to:
                </p>
                <ul className={commonStyles.list}>
                  <li className={commonStyles.listItem}>
                    <MdEmail className={commonStyles.listIcon} />
                    <span className={commonStyles.listText}>
                      Receive exclusive discounts on NFT drops
                    </span>
                  </li>
                  <li className={commonStyles.listItem}>
                    <FaBars className={commonStyles.listIcon} />
                    <span className={commonStyles.listText}>
                      Get surprise gifts with each purchase
                    </span>
                  </li>
                  <li className={commonStyles.listItem}>
                    <IoMdTimer className={commonStyles.listIcon} />
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
                          First Name
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
                          Email Address
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
                {nftImages.map(({ src, alt }) => (
                  <div key={src} className={commonStyles.imageContainer}>
                    <Image
                      src={src}
                      alt={alt}
                      objectFit="cover"
                      width={100}
                      height={100}
                    />
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

export default Nft2;
