"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaGoogle,
} from "react-icons/fa";

const Footer7 = () => {
  return (
    <div className="bg-gray-800 flex flex-col justify-center ">
      <div className="max-w-5xl w-11/12 mx-auto flex flex-wrap justify-between py-16 gap-8">
        <div className="w-full h-[40px] sm:w-auto flex justify-center sm:justify-start">
          <Image
            src="https://www.auraui.com/logo-dark.png"
            alt="image"
            width={100}
            height={34}
          />
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-auto">
          <h1 className="text-lg font-semibold text-white/80">Company</h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              SaffronStays
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              Signature
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              XSeries
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              About
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-auto">
          <h1 className="text-lg font-semibold text-white/80">Contact</h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              mail@saffronstays.com
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              +91 3728253727
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              Contact us
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              Contact to Partner
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-auto">
          <h1 className="text-lg font-semibold text-white/80">Policies</h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              Privacy Policy
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              Terms
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              Sitemap
            </h2>
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              Cancellation Policy
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-auto">
          <h1 className="text-lg font-semibold text-white/80">
            Partner with us
          </h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">
              List a home
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-5">
        <div className="max-w-5xl w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs font-medium text-white/60 text-center sm:text-left">
            © 2021 SaffronStays. All rights reserved
          </div>
          <div className="flex gap-5 items-center text-white justify-center">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaPinterestP className="hover:text-red-500 cursor-pointer" />
            <FaGoogle className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer7;
