import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          AuraUI - Accelerate Web Development with Reusable Components
        </title>
        <meta
          name="description"
          content="Rapidly build high-performance React websites with AuraUI's library of reusable, customizable components. Save time and unlock your development speed."
        />
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
        <link rel="icon" href="/ico.png" />
        {/* Additional SEO tags */}
        <meta
          name="keywords"
          content="AuraUI, open-source, component library, Next.js, Tailwind CSS, web development, high-performance, customizable components, frontend development"
        />
        <meta name="author" content="AuraUI Team" />
        <link rel="canonical" href="https://auraui.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
