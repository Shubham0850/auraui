import React, { useEffect, useState } from "react";
import { DocsThemeConfig, Navbar, ThemeSwitch } from "nextra-theme-docs";
import Footer from "@/components/layout/Footer";

import { useTheme } from "nextra-theme-docs";
import { FaXTwitter } from "react-icons/fa6";

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
          <img className="w-auto h-8" src="/logo-light.png" alt="Logo Light" />
        ) : (
          <img className="w-auto h-8" src="/logo-dark.png" alt="Logo Dark" />
        )}
      </>
    );
  },
  // project: {
  //   link: "https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/",
  //   icon: <FaDiscord />,
  // },

  chat: {
    link: "https://x.com/aura__ui",
    icon: (
      <FaXTwitter className="h-4  text-[#111111] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all" />
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta
        property="og:description"
        content="AuraUI the best platform for website components "
      />
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
