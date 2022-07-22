const getEnv = () => {
    let env = {
        NEXT_PUBLIC_ENABLE_DISCOVERY_CMS: true,
        NEXT_PUBLIC_API_ROOT: process.env.NEXT_PUBLIC_API_ROOT ?? 'http://localhost:8081/api/v1/',
        NEXT_PUBLIC_PUBLIC_TOKEN: process.env.NEXT_PUBLIC_PUBLIC_TOKEN ?? '987654321',
    };

    let assetPrefix = process.env.ASSET_PREFIX ?? '';

    return {
        env: env,
        assetPrefix: assetPrefix,
    };
};

const currentEnv = getEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: currentEnv.env,
    assetPrefix: currentEnv.assetPrefix,
};

module.exports = nextConfig;
