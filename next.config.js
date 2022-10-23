/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslintk: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styleComponents: true,
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  }
}

module.exports = nextConfig
