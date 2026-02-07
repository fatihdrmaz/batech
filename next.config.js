const withNextIntl = require("next-intl/plugin")("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "framer-motion",
    "next-intl",
    "use-intl",
    "@formatjs/intl-localematcher",
  ],
};

module.exports = withNextIntl(nextConfig);
