import React, { useEffect, useState } from "react";
import { DocsThemeConfig, Navbar, ThemeSwitch } from "nextra-theme-docs";
import Footer from "@/components/layout/Footer";

import { useTheme } from "nextra-theme-docs";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: () => {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("");

    useEffect(() => {
      if (theme) {
        setCurrentTheme(theme);
      }
    }, [theme]);

    if (!currentTheme) {
      return null; // or a loading spinner or placeholder
    }

    return (
      <>
        {currentTheme === "light" ? (
          <Image
            className="w-auto h-8"
            src="/logo-light.png"
            alt="Logo Light"
            height={200}
            width={200}
          />
        ) : (
          <Image
            className="w-auto h-8"
            src="/logo-dark.png"
            alt="Logo Dark"
            height={200}
            width={200}
          />
        )}
      </>
    );
  },
  project: {
    link: "https://github.com/Shubham0850/auraui/",
    icon: (
      <FaGithub className="h-4 text-[#111111] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all" />
    ),
  },

  chat: {
    link: "https://x.com/aura__ui",
    icon: (
      <FaXTwitter className="h-4 text-[#111111] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all" />
    ),
  },
  head: (
    <>
      <title>
        AuraUI | Effortlessly Build High-Performance Websites with AuraUI
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta
        property="og:title"
        content=" AuraUI | Build Stunning React Websites Fast with Tailwind & Next.js"
      />
      <meta
        property="og:description"
        content="Build stunning, high-performance websites with AuraUI's open-source components. Fully customizable and integrated with Next.js and Tailwind CSS."
      />
      <meta property="og:image" content="/banner.png" />{" "}
      {/* Add the correct path to your image */}
      <meta property="og:url" content="https://auraui.com" />
      <meta property="og:type" content="website" />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Aura UI | 100x Your Development Speed"
      />
      <meta
        name="twitter:description"
        content="Build stunning, high-performance websites with AuraUI's open-source components. Fully customizable and integrated with Next.js and Tailwind CSS."
      />
      {/* Additional SEO tags */}
      <meta
        name="keywords"
        content="AuraUI, open-source, component library, Next.js, Tailwind CSS, web development, high-performance, customizable components, frontend development"
      />
      <meta name="author" content="AuraUI Team" />
      <link rel="canonical" href="https://auraui.com" />
      <link rel="icon" href="/ico.png" />
    </>
  ),

  navbar: {
    extraContent: ThemeSwitch,
  },

  // banner: {
  //   text: "It is in Beta  ",
  //   dismissible: false,
  //   key: "4",
  // },

  editLink: {
    component: null,
  },

  feedback: {
    content: null,
  },
  primarySaturation: { dark: 0, light: 0 },

  sidebar: {
    autoCollapse: false,
    defaultMenuCollapseLevel: 1,
  },
  gitTimestamp: null,

  footer: {
    text: <Footer />,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "AuraUI",
    };
  },
};

export default config;
