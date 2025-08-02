import React from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer1 = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { href: "/about", text: "About" },
        { href: "/features", text: "Features" },
        { href: "/works", text: "Works" },
        { href: "/career", text: "Career" },
      ],
    },
    {
      title: "Help",
      links: [
        { href: "/support", text: "Customer Support" },
        { href: "/delivery", text: "Delivery Details" },
        { href: "/terms", text: "Terms & Conditions" },
        { href: "/privacy", text: "Privacy Policy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/ebooks", text: "Free eBooks" },
        { href: "/tutorial", text: "Development Tutorial" },
        { href: "/blog", text: "How to - Blog" },
        { href: "/youtube", text: "YouTube Playlist" },
      ],
    },
    {
      title: "Explore",
      links: [
        { href: "/community", text: "Community" },
        { href: "/partners", text: "Partners" },
        { href: "/events", text: "Events" },
        { href: "/newsletter", text: "Newsletter" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FiTwitter />, href: "https://twitter.com" },
    { icon: <FiFacebook />, href: "https://facebook.com" },
    { icon: <FiInstagram />, href: "https://instagram.com" },
    { icon: <FiGithub />, href: "https://github.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-16">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span className="relative inline-block text-base text-gray-200 hover:text-white transition-colors duration-300 cursor-pointer">
                        {link.text}
                        <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image
            src="https://www.auraui.com/logo-dark.png"
            alt="Aura UI Logo"
            width={130}
            height={40}
            className="w-auto h-9"
          />

          {/* Social Icons */}
          <ul className="flex items-center gap-4">
            {socialIcons.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} Aura UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
