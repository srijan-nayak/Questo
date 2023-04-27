/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
  serverRuntimeConfig: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
  async redirects() {
    return [{ source: "/", destination: "/questions", permanent: true }];
  },
};

module.exports = nextConfig;
