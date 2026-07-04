/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "new.audiotextsolutions.com",
      },
      {
        protocol: "https",
        hostname: "www.audiotextsolutions.com",
      },
    ],
  },
};

module.exports = nextConfig;
