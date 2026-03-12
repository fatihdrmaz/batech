const withNextIntl = require("next-intl/plugin")("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "framer-motion",
    "next-intl",
    "use-intl",
    "@formatjs/intl-localematcher",
  ],
  images: {
    // Avoid Vercel Image Optimization transformation limits breaking pages.
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
