/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...(config.externals || []), "bcrypt", "jsonwebtoken"];
    return config;
  },
};

export default nextConfig;
