/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "suhan_lee_deploy_id",
};

module.exports = nextConfig;
