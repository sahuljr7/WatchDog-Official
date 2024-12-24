/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    images: {
      domains: ["images.unsplash.com", "mywatchdog.in", "media.istockphoto.com"],
    }
  }
  
  module.exports = nextConfig
  