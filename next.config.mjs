/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API: process.env.API,
    GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
    GOOGLE_MAP_LANGUAGE: process.env.GOOGLE_MAP_LANGUAGE,
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    GMAIL: process.env.GMAIL,
    ZALO: process.env.ZALO,
    FACEBOOK: process.env.FACEBOOK,
  }
};

export default nextConfig;
