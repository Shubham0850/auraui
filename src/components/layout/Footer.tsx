import Image from "next/image";
import Link from "next/link";
import { useTheme, ThemeSwitch, Navbar } from "nextra-theme-docs";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      if (theme === 'system') {
        setCurrentTheme(matchMedia.matches ? 'dark' : 'light');
      } else {
        setCurrentTheme(theme);
      }
    };

    updateTheme();
    matchMedia.addEventListener('change', updateTheme);

    return () => {
      matchMedia.removeEventListener('change', updateTheme);
    }
  }, [theme]);

  if (!currentTheme) {
    return null; // or a loading spinner or placeholder
  }

  return (
    <footer className="w-full">
      <div className="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        <div className="md:order-1 w-[90px] ">
          <Link href={"/"}>
            {currentTheme === "light" ? (
              <Image
                className="w-auto h-8"
                src="/logo-light.png"
                alt=""
                height={200}
                width={200}
              />
            ) : (
              <Image
                className="w-auto h-8"
                src="/logo-dark.png"
                alt=""
                height={200}
                width={200}
              />
            )}
          </Link>
        </div>

        <div className="md:order-3">
          <ul className="flex items-center justify-end space-x-4">
            <li>
              <a href="https://github.com/Shubham0850/auraui" target="_blank">
                <FaGithub size={20} className=" dark:hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/channels/1270693612681953311/1270693612681953314"
                target="_blank"
              >
                <FaDiscord size={20} className="dark:hover:text-white " />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aura__ui/" target="_blank">
                <FaInstagramSquare
                  size={20}
                  className=" dark:hover:text-white"
                />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/aura__ui"
                title=""
                target="_blank"
                rel="noopener"
                className="inline-flex transition-all duration-200 rounded text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <span className="sr-only"> Twitter </span>
                <FaXTwitter className="h-4   text-[#111111] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/auraui/about/?viewAsMember=true"
                title=""
                target="_blank"
                rel="noopener"
                className="inline-flex transition-all duration-200 rounded text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <FaLinkedinIn className="h-4   text-[#111111] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all" />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 md:order-2">
          <ul className="flex items-center justify-center sm:justify-center md:justify-center space-x-9 lg:space-x-10">
            <li>
              <Link
                href="/components"
                title=""
                className="text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 hover:text-gray-300 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
              >
                Components
              </Link>
            </li>

            <li>
              <Link
                href="/docs"
                title=""
                className="text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 hover:text-gray-300 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/templates"
                title=""
                className="text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 hover:text-gray-300 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
              >
                Templates
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
