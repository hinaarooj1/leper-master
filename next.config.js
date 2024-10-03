/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return "LEPER"
  },

}

module.exports = nextConfig
