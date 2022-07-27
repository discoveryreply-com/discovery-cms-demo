/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.ASSET_PREFIX ?? '',
};

module.exports = nextConfig;
