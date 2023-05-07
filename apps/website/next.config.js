const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: !!process.env.ANALYZE,
});

/** @type {import('next').NextConfig} */
const config = {
  images: { unoptimized: true },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  reactStrictMode: true,
  // transpilePackages: ["@onivue/ui", "utils"],
  transpilePackages: ["utils"],
};

module.exports = withBundleAnalyzer(config);
