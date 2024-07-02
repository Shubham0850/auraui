import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

type Props = {};

const CompactFooter = (props: Props) => {
  return (
    <footer className="py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-white">auraui</p>
            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href="#"
                  title="About"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Features"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Features{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Works"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Career"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base font-semibold text-white">Help</p>
            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href="#"
                  title="Customer Support"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Delivery Details"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Terms & Conditions"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Privacy Policy"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-base font-semibold text-white">Resources</p>
            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href="#"
                  title="Free eBooks"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Free eBooks{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Development Tutorial"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  Development Tutorial{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="How to - Blog"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  How to - Blog{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="YouTube Playlist"
                  className="inline-flex text-sm font-normal text-gray-200 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {" "}
                  YouTube Playlist{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="text-base font-semibold text-white">Install App</p>
            <div className="mt-8 space-y-4">
              <a
                href="#"
                title="App Store"
                className="flex"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="object-contain w-auto h-14"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/footer/4/app-store.png"
                  alt="App Store"
                />
              </a>
              <a
                href="#"
                title="Play Store"
                className="flex"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="object-contain w-auto h-14"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/footer/4/play-store.png"
                  alt="Play Store"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-700 sm:mt-16 lg:mt-20">
          <div className="flex flex-col justify-between md:items-center md:flex-row">
            <p className="text-sm font-normal text-white">
              © Copyright 2023, All Rights Reserved by auraui
            </p>
            <ul className="flex items-center justify-start mt-6 space-x-3 md:justify-end md:mt-0">
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="GitHub"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CompactFooter;
