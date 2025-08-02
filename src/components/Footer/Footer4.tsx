import React from "react";
import Image from "next/image";
import { FiTwitter, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

const Footer4 = () => {
  const sections = [
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
    { icon: <FiTwitter className="w-4 h-4" />, href: "#" },
    { icon: <FiFacebook className="w-4 h-4" />, href: "#" },
    { icon: <FiInstagram className="w-4 h-4" />, href: "#" },
    { icon: <FiGithub className="w-4 h-4" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-50 pt-14 pb-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-10">
          {/* Logo + About */}
          <div className="col-span-2 lg:col-span-2 lg:pr-8">
            <Image
              className="w-auto h-9"
              src="https://www.auraui.com/logo-light.png"
              alt="AuraUI Logo"
              width={150}
              height={36}
            />
            <p className="text-sm leading-relaxed text-gray-600 mt-6">
              Explore how AuraUI can elevate your web projects with exceptional
              components and seamless integration.
            </p>
            <ul className="flex items-center space-x-3 mt-7">
              {socialLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                {section.title}
              </p>
              <ul className="mt-5 space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm text-gray-700 hover:text-blue-600 relative group transition-all duration-300"
                    >
                      {link}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Stay Updated
            </p>
            <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 shadow-sm">
              <form
                action="#"
                method="POST"
                className="flex flex-col sm:flex-row items-center gap-3 w-full"
              >
                <div className="relative flex-1 w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                    @
                  </span>
                </div>
                <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-3">
                Get the latest AuraUI updates straight to your inbox.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200/80 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AuraUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
