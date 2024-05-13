import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Linkedin } from "lucide-react";

import { Tabs } from "nextra/components";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
    icon: <Linkedin className="h-10 w-10" />,
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",

  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
