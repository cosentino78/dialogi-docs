import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#FF6B2C" />
        <text
          x="14"
          y="20"
          textAnchor="middle"
          fill="white"
          fontWeight="800"
          fontSize="18"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          D
        </text>
      </svg>
      <span
        style={{
          fontWeight: 800,
          fontSize: 20,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          color: "#1A1A2E",
        }}
      >
        Dialogi
      </span>
      <span
        style={{
          fontSize: 12,
          color: "#6C757D",
          marginLeft: 4,
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        Docs
      </span>
    </span>
  ),
  project: {
    link: "https://github.com/cosentino78/dialogi-docs",
  },
  docsRepositoryBase:
    "https://github.com/cosentino78/dialogi-docs/tree/master/pages",
  footer: {
    content: (
      <span style={{ fontFamily: "DM Sans, sans-serif", color: "#6C757D" }}>
        Dialogi &middot; Cada conversa importa. &copy;{" "}
        {new Date().getFullYear()}
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    title: "Nesta pagina",
  },
  editLink: {
    content: null,
  },
  feedback: {
    content: null,
  },
  navigation: true,
  darkMode: true,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Dialogi Docs" />
      <meta
        property="og:description"
        content="Documentacao completa do Dialogi - Plataforma de dialogos inteligentes"
      />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </>
  ),
  color: {
    hue: 19,
    saturation: 100,
  },
};

export default config;
