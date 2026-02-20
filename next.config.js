/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // Allow importing images from the public folder without warnings
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
