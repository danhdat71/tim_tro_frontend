/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API: process.env.API,
    API_SERVERSIDE: process.env.API_SERVERSIDE,
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
    APP_NAME: process.env.APP_NAME,
    // Firebase
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESAGING_SEENDER_ID: process.env.FIREBASE_MESAGING_SEENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_VAPID_KEY: process.env.FIREBASE_VAPID_KEY,
  }
};

export default nextConfig;
