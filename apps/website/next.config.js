const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: !!process.env.ANALYZE,
});

/** @type {import('next').NextConfig} */
const config = {
  basePath,
  images: { unoptimized: true },
  output: "export",
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  reactStrictMode: true,
  transpilePackages: ["@onivue/ui", "utils"],
};
return withBundleAnalyzer(config);
