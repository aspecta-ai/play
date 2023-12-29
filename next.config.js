/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // disable eslint during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // disable type-checking for build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
