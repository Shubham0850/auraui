import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import Image from "next/image";

const Footer6 = () => {
  const linkStyle =
    "text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300";

  const socialStyle =
    "w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black text-gray-300 transition-all duration-300";

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative container mx-auto px-6 py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Logo + Description */}
          <div>
            <a href="#" className="flex items-center space-x-2">
              <Image
                className="w-auto h-9"
                src="https://www.auraui.com/logo-dark.png"
                alt="AuraUI Logo"
                width={150}
                height={40}
              />
            </a>
            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
              A Magical Tool to optimize your content. Know your audience,
              connect deeply, and scale your growth with{" "}
              <span className="text-yellow-400">AuraUI</span>.
            </p>
          </div>

          {/* Gen AI Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Gen AI</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Sign In", "Register", "Contact"].map(
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

          {/* Use Cases */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Use Cases</h3>
            <ul className="space-y-3">
              {[
                "AI Writer",
                "Businesses AI",
                "AI Blog Writer",
                "AI Content Creator",
                "Article Writer",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className={linkStyle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">
              Stay Updated
            </h3>
            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-gray-800/70 text-sm text-gray-200 
               placeholder-gray-400 border border-gray-700
               focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                className="-ml-16 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 
               text-black flex items-center justify-center rounded-full 
               transition-all duration-300 shadow-md"
              >
                <RiSendPlaneLine className="w-5 h-5" />
              </button>
            </form>

            <div className="flex space-x-4 mt-6">
              {[
                { icon: <TbBrandGithubFilled />, href: "#" },
                { icon: <BsTwitter />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaInstagramSquare />, href: "#" },
              ].map((item, idx) => (
                <a key={idx} href={item.href} className={socialStyle}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-medium">GenAI</span>. Designed
            with ❤️ by AuraUI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
