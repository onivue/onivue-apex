const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: !!process.env.ANALYZE,
});

/** @type {import('next').NextConfig} */
const config = {
  images: { unoptimized: true },
  reactStrictMode: true,
  transpilePackages: ["@onivue/ui", "utils"],
};

module.exports = withBundleAnalyzer(config);
