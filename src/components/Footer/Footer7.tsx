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
  const linkStyle =
    "text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer";

  const sectionTitle = "text-lg font-semibold text-white";

  const socialStyle =
    "w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-black hover:bg-yellow-400 transition-all duration-300 cursor-pointer";

  return (
    <footer className="bg-gray-900">
      {/* Top Section */}
      <div className="max-w-6xl w-11/12 mx-auto flex flex-wrap justify-between py-16 gap-10">
        {/* Logo + About */}
        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
          <Image
            src="https://www.auraui.com/logo-dark.png"
            alt="AuraUI Logo"
            width={120}
            height={40}
            className="mb-4"
          />
          <p className="text-sm text-gray-400 max-w-xs text-center sm:text-left">
            Explore how <span className="text-yellow-400">AuraUI</span> helps
            you craft stunning, high‑performance web experiences with ease.
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h1 className={sectionTitle}>Company</h1>
          <ul className="flex flex-col gap-3">
            {["About", "Features", "Careers", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className={linkStyle}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-4">
          <h1 className={sectionTitle}>Resources</h1>
          <ul className="flex flex-col gap-3">
            {["Docs", "Blog", "Tutorials", "Community"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className={linkStyle}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-4">
          <h1 className={sectionTitle}>Policies</h1>
          <ul className="flex flex-col gap-3">
            {["Privacy Policy", "Terms", "Sitemap", "Cancellation"].map(
              (item, idx) => (
                <li key={idx}>
                  <a href="#" className={linkStyle}>
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-6xl w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-medium">AuraUI</span>. All
            rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              FaFacebookF,
              FaInstagram,
              FaTwitter,
              FaLinkedinIn,
              FaYoutube,
              FaPinterestP,
              FaGoogle,
            ].map((Icon, idx) => (
              <a key={idx} href="#" className={socialStyle}>
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;
