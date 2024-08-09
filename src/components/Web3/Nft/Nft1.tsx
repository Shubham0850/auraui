import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  container: "bg-white",
  header: "py-4 sm:py-6",
  navContainer: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  nav: "flex items-center justify-between",
  logo: "w-auto h-8",
  mobileMenuButton:
    "p-1 text-gray-500 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
  navItems: "hidden md:flex md:items-center md:justify-end md:space-x-12",
  navLink:
    "text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900",
  mobileNav: "px-1 py-5",
  gridImages: "grid grid-cols-3 gap-5 mx-auto sm:max-w-md",
  image: "rounded-xl",
  textContainer: "max-w-md mx-auto mt-8 text-center",
  title: "text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl",
  description: "mt-4 text-base font-medium text-gray-500 lg:text-lg",
  countdown:
    "max-w-md mx-auto mt-10 overflow-hidden text-center bg-gray-900 rounded-xl",
  countdownInner: "p-6",
  countdownItems:
    "flex items-center justify-between px-1 space-x-3 lg:space-x-6",
  countdownNumber: "text-4xl font-bold text-white",
  countdownSeparator: "text-2xl font-bold text-white animate-pulse",
  countdownText: "mt-1 text-sm font-medium text-gray-400",
  button:
    "inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-600",
};

const Nft1: React.FC = () => {
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
                  src="https://www.auraui.com/logo-light.png"
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
              <Link href="#" title="About" className={commonStyles.navLink}>
                About
              </Link>
              <Link href="#" title="Our NFTs" className={commonStyles.navLink}>
                Our NFTs
              </Link>
            </div>
          </nav>

          {expanded && (
            <nav className={commonStyles.mobileNav}>
              <div className="grid gap-y-6">
                <Link href="#" title="About" className={commonStyles.navLink}>
                  About
                </Link>
                <Link
                  href="#"
                  title="Our NFTs"
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
          <div className={commonStyles.gridImages}>
            <Image
              className={commonStyles.image}
              src="https://www.auraui.com/web3Images/nft/nft1.png"
              alt="NFT Image 1"
              width={300}
              height={300}
            />
            <Image
              className={`transform -rotate-2 ${commonStyles.image}`}
              src="https://www.auraui.com/web3Images/nft/nft2.png"
              alt="NFT Image 2"
              width={300}
              height={300}
            />
            <Image
              className={`transform rotate-2 ${commonStyles.image}`}
              src="https://www.auraui.com/web3Images/nft/nft3.jpeg"
              alt="NFT Image 3"
              width={300}
              height={300}
            />
          </div>

          <div className={commonStyles.textContainer}>
            <h1 className={commonStyles.title}>Auraui NFT Collection Launch</h1>
            <p className={commonStyles.description}>
              Discover unique digital collectibles with Auraui&apos;s exclusive
              NFT collection, launching soon on the Ethereum blockchain.
            </p>
          </div>

          <div className={commonStyles.countdown}>
            <div className={commonStyles.countdownInner}>
              <div className={commonStyles.countdownItems}>
                <div>
                  <p className={commonStyles.countdownNumber}>69</p>
                  <p className={commonStyles.countdownText}>Days</p>
                </div>
                <div>
                  <IoMdTimer className={commonStyles.countdownSeparator} />
                </div>
                <div>
                  <p className={commonStyles.countdownNumber}>69</p>
                  <p className={commonStyles.countdownText}>Hours</p>
                </div>
                <div>
                  <IoMdTimer className={commonStyles.countdownSeparator} />
                </div>
                <div>
                  <p className={commonStyles.countdownNumber}>69</p>
                  <p className={commonStyles.countdownText}>Mins</p>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="#"
                  title="Join Discord"
                  className={commonStyles.button}
                  role="button"
                >
                  Join Discord
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nft1;
