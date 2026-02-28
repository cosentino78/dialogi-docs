import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  staticImage: true,
});

export default withNextra({
  output: "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});
