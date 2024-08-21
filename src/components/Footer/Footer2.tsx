import React from "react";
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiMessageSquare,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
  const iconStyles = {
    base: "flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-blue-200 rounded-full w-7 h-7",
    hoverFocus:
      "focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600",
  };

  const linkClasses = {
    base: "text-sm text-blue-200 transition-all duration-200",
    hoverFocus: "hover:text-white focus:text-white",
  };

  return (
    <section className="py-10 bg-blue-900 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
          <div>
            <Image
              className="w-auto h-7"
              src="/logo-dark.png"
              alt="Company Logo"
              width={150}
              height={36}
            />
            <ul className="mt-8 space-y-4">
              {["About", "Features", "Works", "Career"].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    title={link}
                    className={`${linkClasses.base} ${linkClasses.hoverFocus}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Help</p>
            <ul className="mt-8 space-y-4">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    title={link}
                    className={`${linkClasses.base} ${linkClasses.hoverFocus}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Resources</p>
            <ul className="mt-8 space-y-4">
              {[
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "YouTube Playlist",
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    title={link}
                    className={`${linkClasses.base} ${linkClasses.hoverFocus}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Extra Links</p>
            <ul className="mt-8 space-y-4">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    title={link}
                    className={`${linkClasses.base} ${linkClasses.hoverFocus}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28 2xl:mt-32">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
              <ul className="flex items-center justify-start space-x-8">
                {[
                  {
                    icon: <FiTwitter className="w-4 h-4" />,
                    href: "https://twitter.com",
                  },
                  {
                    icon: <FiFacebook className="w-4 h-4" />,
                    href: "https://facebook.com",
                  },
                  {
                    icon: <FiInstagram className="w-4 h-4" />,
                    href: "https://instagram.com",
                  },
                  {
                    icon: <FiGithub className="w-4 h-4" />,
                    href: "https://github.com",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${iconStyles.base} ${iconStyles.hoverFocus}`}
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap items-center justify-start mt-5 gap-x-8 sm:mt-0 gap-y-3">
                {["Privacy Policy", "Terms & Conditions", "Support"].map(
                  (link, idx) => (
                    <li key={idx}>
                      <Link
                        href="#"
                        title={link}
                        className={`${linkClasses.base} ${linkClasses.hoverFocus}`}
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <p className="mt-6 text-sm text-blue-200 lg:mt-0">
              © Copyright 2024, All Rights Reserved by AuraUI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
