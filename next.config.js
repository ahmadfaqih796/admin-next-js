/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "localhost",
      "api.peluangkerjaku.com",
      "api-pro.dikahadir.com",
      "api-dev.dikahadir.com",
    ],
  },
};

module.exports = nextConfig;
