/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.ASSET_PREFIX ?? '',
    env: {
        DISCOVERY_PREVIEW_TOKEN: process.env.DISCOVERY_PREVIEW_TOKEN,
        NEXT_PUBLIC_DISCOVERY_API_ROOT: process.env.NEXT_PUBLIC_DISCOVERY_API_ROOT,
        NEXT_PUBLIC_DISCOVERY_API_TOKEN: process.env.NEXT_PUBLIC_DISCOVERY_API_TOKEN,
        NEXT_PUBLIC_PROPERTY_TITLE: process.env.NEXT_PUBLIC_PROPERTY_TITLE
    }
};

module.exports = nextConfig;
