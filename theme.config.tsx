import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import {
  Box,
  Linkedin,
  LinkedinIcon,
  LucideTwitter,
  TwitterIcon,
} from "lucide-react";

import { Tabs } from "nextra/components";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const config: DocsThemeConfig = {
  logo: <span>Aura UI</span>,
 
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta
        property="og:description"
        content="AuraUI the best platform for website components "
      />
    </>
  ),

  project: {
    link: "https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/",
    icon: <LinkedinIcon />,
  },

  chat: {
    link: "https://twitter.com/Jayjeet_100",
    icon: <TwitterIcon style={{marginLeft:'-12px'}} />,
  },

  gitTimestamp: false,

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
