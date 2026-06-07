import React, { useEffect, useState } from "react";
import { DocsThemeConfig, ThemeSwitch } from "nextra-theme-docs";
import Footer from "@/components/layout/Footer";
import NavbarAuth from "@/components/layout/NavbarAuth";

import { useTheme } from "nextra-theme-docs";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const config = {
  logo: () => {
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="AuraUI | Build Stunning React Websites Fast with Tailwind & Next.js"
      />
      <meta
        property="og:description"
        content="Ship stunning React websites in hours with AuraUI's animated components and production-ready templates. Built for Next.js and Tailwind CSS."
      />
      <meta property="og:image" content="https://www.auraui.com/banner.png" />
      <meta property="og:url" content="https://auraui.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="AuraUI | Build Stunning React Websites Fast with Tailwind & Next.js"
      />
      <meta
        name="twitter:description"
        content="Ship stunning React websites in hours with AuraUI's animated components and production-ready templates. Built for Next.js and Tailwind CSS."
      />
      <meta
        name="keywords"
        content="AuraUI, React components, Next.js templates, Tailwind CSS, component library, UI kit, open-source, frontend"
      />
      <meta name="author" content="AuraUI Team" />
      <link rel="icon" href="/ico.png" />
    </>
  ),

  navbar: {
    extraContent: () => (
      <div className="flex items-center gap-2">
        <ThemeSwitch />
        <NavbarAuth />
      </div>
    ),
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
      titleTemplate: "%s | AuraUI",
    };
  },
};

export default config;
