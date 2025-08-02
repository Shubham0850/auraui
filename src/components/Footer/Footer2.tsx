import React from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      links: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Resources",
      links: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "YouTube Playlist",
      ],
    },
    {
      title: "Explore",
      links: ["Community", "Partners", "Events", "Newsletter"],
    },
  ];

  const socialLinks = [
    { icon: <FiTwitter />, href: "https://twitter.com" },
    { icon: <FiFacebook />, href: "https://facebook.com" },
    { icon: <FiInstagram />, href: "https://instagram.com" },
    { icon: <FiGithub />, href: "https://github.com" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="relative inline-block text-sm text-gray-500 hover:text-black transition-colors duration-300 group"
                    >
                      {link}
                      <span className="absolute left-1/2 -bottom-0.5 w-0 h-[1.5px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="https://www.auraui.com/logo-light.png"
              alt="AuraUI Logo"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </div>

          {/* Social Links */}
          <ul className="flex gap-4">
            {socialLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 text-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 transition-all duration-300"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} AuraUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
