/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    NEXT_URL: process.env.NEXT_URL,
  }
}

module.exports = nextConfig
