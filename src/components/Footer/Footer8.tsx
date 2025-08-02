import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaSquareInstagram,
  FaRss,
} from "react-icons/fa6";

const Footer8 = () => {
  const linkStyle =
    "text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm";

  const sectionTitle =
    "text-white/90 font-semibold tracking-wide text-sm uppercase mb-4";

  const socialStyle =
    "w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-blue-500 hover:border-blue-500 hover:text-white text-gray-300 transition-all duration-300";

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative pt-20 pb-14 px-6 lg:px-12">
        {/* Top Section */}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-14">
          {/* Brand + Description */}
          <div className="md:col-span-2">
            <Image
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI Logo"
              width={160}
              height={36}
              className="mb-6"
            />
            <p className="text-gray-400 text-base leading-7 max-w-sm">
              <span className="font-medium text-white">AuraUI</span> helps you
              craft stunning, fast, and scalable interfaces. A toolkit designed
              for modern developers & designers.
            </p>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
            <div>
              <h4 className={sectionTitle}>Product</h4>
              <ul className="space-y-3">
                {["Components", "Templates", "Docs", "Integrations"].map(
                  (item, i) => (
                    <li key={i} className={linkStyle}>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className={sectionTitle}>Resources</h4>
              <ul className="space-y-3">
                {["Blog", "Guides", "Showcase", "Community"].map((item, i) => (
                  <li key={i} className={linkStyle}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={sectionTitle}>Company</h4>
              <ul className="space-y-3">
                {["About", "Team", "Careers", "Contact"].map((item, i) => (
                  <li key={i} className={linkStyle}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={sectionTitle}>More</h4>
              <ul className="space-y-3">
                {["Changelog", "Open Source", "Support", "Partners"].map(
                  (item, i) => (
                    <li key={i} className={linkStyle}>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 max-w-[800px] mx-auto border-t border-white/10 pt-12 text-center">
          <h4 className="text-white text-xl font-semibold mb-3">
            Stay Updated
          </h4>
          <p className="text-gray-400 mb-8 text-sm">
            Subscribe for the latest UI kits, components, and tutorials.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-500 hover:to-pink-500 text-white text-sm font-medium shadow-lg shadow-blue-600/20 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          {/* Socials */}
          <div className="flex gap-4 mb-6 md:mb-0">
            {[FaFacebookF, FaXTwitter, FaSquareInstagram, FaRss].map(
              (Icon, i) => (
                <a key={i} href="#" className={socialStyle}>
                  <Icon className="w-4 h-4" />
                </a>
              ),
            )}
          </div>
          <p className="text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">AuraUI</span>. Crafted with
            ❤️ for the web.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer8;
