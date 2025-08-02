import React from "react";
import {
  FiMessageSquare,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer3 = () => {
  const footerSections = [
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
    { icon: <FiTwitter className="w-4 h-4" />, href: "https://twitter.com" },
    { icon: <FiFacebook className="w-4 h-4" />, href: "https://facebook.com" },
    {
      icon: <FiInstagram className="w-4 h-4" />,
      href: "https://instagram.com",
    },
    { icon: <FiGithub className="w-4 h-4" />, href: "https://github.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-14 gap-x-10">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-4 lg:pr-12">
            <Image
              className="w-auto h-9"
              src="https://www.auraui.com/logo-light.png"
              alt="Aura UI Logo"
              width={150}
              height={36}
            />
            <p className="text-sm leading-relaxed text-gray-600 mt-6">
              Build with passion ⚡. Join AuraUI to craft modern UI experiences
              with elegance, speed, and consistency.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 mt-7"
            >
              <FiMessageSquare className="w-5 h-5" />
              Start Live Chat
            </Link>
          </div>

          {/* Link Columns */}
          {footerSections.map((section, index) => (
            <div className="lg:col-span-2" key={index}>
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                {section.title}
              </p>
              <ul className="mt-5 space-y-4">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="relative block text-sm text-gray-600 hover:text-orange-600 pl-2 transition-all duration-300 group"
                    >
                      <span className="absolute left-0 top-0 h-full w-[2px] bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-200/70"></div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} AuraUI. All rights reserved.
          </p>

          <ul className="flex items-center gap-3">
            {socialLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-md bg-white/60 backdrop-blur border border-gray-200 text-gray-600 hover:text-orange-600 hover:border-orange-400 shadow-sm transition-all duration-300"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
