import React, { useEffect, useState } from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Footer from "@/components/layout/Footer";

import { useTheme } from "nextra-theme-docs";
import { FaTwitter } from "react-icons/fa";

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
    icon: <FaTwitter />,
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

  //  navbar:{
  //    component: <> <Navbar/> </>,
  //  },



  // banner: {
  //   text: "It is in Beta  ",
  //   dismissible: false,
  //   key: "4",
  // },



  editLink:{
component:null
  },

  feedback:{
    content:null
  },

  sidebar: {
    autoCollapse: false,
    defaultMenuCollapseLevel: 1,
  },
  gitTimestamp: false,
  darkMode: true,
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
