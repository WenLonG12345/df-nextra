import React from "react";
import Image from 'next/image';
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div className="flex flex-row gap-1 items-center">
      <Image src="/logo.png" alt="Logo" width={30} height={30} />
      <div>Vortals DF Documentation</div>
    </div>
  ),
  project: {
    link: "https://digital-fortress.eco.astro.com.my/#/signin",
    icon: <Image src="/df_cms.png" alt="Logo" width={40} height={40} />,
  },
  chat: {
    link: "https://de-digital-fortress-assistant-stg.eco.astro.com.my/",
    icon: <Image src="/dfap_cms.png" alt="Logo" width={40} height={40} />,
  },
  docsRepositoryBase: "https://digital-fortress.eco.astro.com.my/#/signin",
  footer: {
    text: `${new Date().getFullYear()} © Measat Broadcast Network Systems Sdn Bhd 199201008561 (240064-A)`,
  },
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Vortals DF Documentation",
    };
  },
};

export default config;
