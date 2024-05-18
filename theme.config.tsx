import React from "react";
import { DocsThemeConfig} from "nextra-theme-docs";
import Footer from "@/components/layout/Footer";
import { title } from "process";
import { useTheme} from "nextra-theme-docs";


const config: DocsThemeConfig = {
  logo: () => {
    const { theme } = useTheme();
    return (
      <>
        {theme === "light" ? (
          <img className="w-auto h-8" src="/logo-light.png" alt="Logo Light" />
        ) : (
          <img className="w-auto h-8" src="/logo-dark.png" alt="Logo Dark" />
        )}
      </>
    );
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta
        property="og:description"
        content="AuraUI the best platform for website components "
      />
      <link rel="icon" href="/logo.png" />
    </>
  ),

//  navbar:{
//    component:'darkMode',
//    extraContent: ""
//  },


  // project: {
  //   link: "https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/",
  //   icon: <LinkedinIcon />,
  // },

  // chat: {
  //   link: "https://twitter.com/Jayjeet_100",
  //   icon: <TwitterIcon style={{ marginLeft: '-12px' }} />,
  // },

  // banner: {
  //   text: "It is in Beta  ",
  //   dismissible: false,
  //   key: "4",
  // },

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
      titleTemplate: "Aura UI",
    };
  },
};

export default config;
