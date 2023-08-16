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
  env: {
    API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_BASE_API: process.env.NEXT_PUBLIC_BASE_API,
    NEXT_PUBLIC_BASE_IMAGE_URL: process.env.NEXT_PUBLIC_BASE_IMAGE_URL,
    SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME,
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  },
};

module.exports = nextConfig;
