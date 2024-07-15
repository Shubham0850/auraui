import React from "react";
import Link from "next/link";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import Image from "next/image";

// SVG Components as React Icons
const TwitterIcon = () => <FiTwitter className="w-6 h-6" />;
const FacebookIcon = () => <FiFacebook className="w-6 h-6" />;
const InstagramIcon = () => <FiInstagram className="w-6 h-6" />;

type Props = {};

const SmallFooter = (props: Props) => {
  // Common anchor styles
  const anchorStyles =
    "text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80 cursor-pointer";

  return (
    <section className="py-12 bg-gradient-to-r from-fuchsia-600 to-blue-600">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <Image
              className="w-auto mx-auto h-7"
              src="https://www.auraui.com/logo-dark.png"
              alt="Aura UI Logo"
              height={200}
              width={200}
            />
            <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">
              © Copyright 2024 Aura UI
            </p>
          </div>

          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
              <li>
                <Link href="/about">
                  <span className={anchorStyles}>About</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className={anchorStyles}>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className={anchorStyles}>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className={anchorStyles}>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <span className={anchorStyles}>Support</span>
                </Link>
              </li>
            </ul>

            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

            <ul className="flex items-center justify-center space-x-8 xl:justify-end">
              <li>
                <a
                  href="https://twitter.com"
                  title="Twitter"
                  className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  title="Facebook"
                  className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  title="Instagram"
                  className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallFooter;
