import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaSquareInstagram,
  FaRss,
} from "react-icons/fa6";

const Footer8 = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-14 pb-10 px-4 sm:px-6 lg:px-12">
      {/* Top Section */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Left Content */}
        <div className="md:col-span-2">
          <Image
            src="https://www.auraui.com/logo-light.png"
            alt="AuraUI Logo"
            width={140}
            height={28}
            className="mb-4"
          />
          <p className="text-gray-600 text-base leading-7">
            Empowering and guiding businesses on their journey to sustainable
            practices through tailored, transparent, and cost-effective ESG
            solutions.
          </p>
        </div>

        {/* Footer Links */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Regulations</h4>
            <ul className="space-y-3 text-gray-600">
              <li>CSRD</li>
              <li>SFDR</li>
              <li>CSDDD</li>
              <li>EU Taxonomy</li>
              <li>Double Materiality</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Learn ESG</li>
              <li>Blogs</li>
              <li>E-books</li>
              <li>Webinars</li>
              <li>Templates</li>
              <li>Glossary</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li>About</li>
              <li>Team</li>
              <li>Partners</li>
              <li>Media Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">More Links</h4>
            <ul className="space-y-3 text-gray-600">
              <li>REACTOR PRO</li>
              <li>REACTOR MEDIA</li>
              <li>ESG for Businesses</li>
              <li>CSRD for Business</li>
              <li>Supply Chain Sustainability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-14 max-w-[900px] mx-auto border-t border-gray-100 pt-10">
        <h4 className="text-gray-900 text-lg font-semibold mb-2">
          Stay Updated
        </h4>
        <p className="text-gray-600 mb-4">
          Get the latest ESG updates and industry news delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex gap-4 mb-4 md:mb-0">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaXTwitter className="hover:text-blue-600 cursor-pointer" />
          <FaSquareInstagram className="hover:text-blue-600 cursor-pointer" />
          <FaRss className="hover:text-blue-600 cursor-pointer" />
        </div>
        <p>© REACTOR, LLC, 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer8;
