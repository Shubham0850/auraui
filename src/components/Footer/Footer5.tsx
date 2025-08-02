import React from "react";
import Link from "next/link";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import Image from "next/image";

const Footer5 = () => {
  const anchorStyles =
    "relative text-sm text-white transition duration-300 cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300";

  const socialIconStyles =
    "flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-white hover:bg-white hover:text-fuchsia-600 transition-all duration-300";

  return (
    <section className="py-10 bg-gradient-to-br from-fuchsia-700 via-purple-700 to-blue-700 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-10 pointer-events-none"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          {/* Left side */}
          <div className="xl:flex xl:items-center xl:space-x-6">
            <Image
              className="w-auto mx-auto h-8"
              src="https://www.auraui.com/logo-dark.png"
              alt="Aura UI Logo"
              height={200}
              width={200}
            />
            <p className="mt-4 text-sm text-white/80 xl:mt-0">
              © 2024 AuraUI. All rights reserved.
            </p>
          </div>

          {/* Right side */}
          <div className="mt-8 xl:mt-0 xl:flex xl:items-center xl:space-x-10">
            {/* Navigation Links */}
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {["About", "Services", "Privacy Policy", "Terms", "Support"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link href={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
                      <span className={anchorStyles}>{item}</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>

            {/* Divider */}
            <div className="hidden xl:block w-px h-6 bg-white/20"></div>

            {/* Social Icons */}
            <ul className="flex items-center justify-center space-x-5 mt-6 xl:mt-0">
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
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialIconStyles}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer5;
