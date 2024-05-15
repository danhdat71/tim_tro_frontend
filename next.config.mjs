/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API: process.env.API,
    BACKEND_URL: process.env.BACKEND_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
    GOOGLE_MAP_LANGUAGE: process.env.GOOGLE_MAP_LANGUAGE,
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    GMAIL: process.env.GMAIL,
    ZALO: process.env.ZALO,
    FACEBOOK: process.env.FACEBOOK,
    //Site Info
    SITE_NAME: process.env.SITE_NAME,
    COMPANY_NAME: process.env.COMPANY_NAME,
  }
};

export default nextConfig;
