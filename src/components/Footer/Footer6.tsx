import React from "react";
import Image from "next/image";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer6 = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap  justify-between">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4 mb-8 md:mb-0">
            <Image
              src="https://genai-xzgd.vercel.app/logo.svg"
              alt="logo"
              width={150}
              height={300}
            />
            <p className="mt-4 text-sm md:w-[250px] ">
              A Magical Tool to Optimize your content for the first know who
              you&apos;re targeting. Identify your target audience.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Gen AI</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div className="w-full lg:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  AI Writer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Businesses AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  AI Blog Writer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  AI Content Creator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Article Writer
                </a>
              </li>
            </ul>
          </div>

          {/* News and Update Section */}
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 font-bold">News and Updates</h3>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-2 md:px-4 py-2 border bg-transparent placeholder-white border-yellow-500 text-white rounded-l-lg focus:outline-none"
              />
              <button className="bg-yellow-500 px-2 md:px-4 py-[14px] rounded-r-lg text-black">
                <RiSendPlaneLine />
              </button>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors"
              >
                <TbBrandGithubFilled />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors"
              >
                <BsTwitter />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-500 transition-colors"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            Copyright <span className="text-yellow-500">GenAI</span>. Design By
            AuraUI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
