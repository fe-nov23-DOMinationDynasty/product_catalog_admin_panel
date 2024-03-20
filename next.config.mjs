/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(
        __dirname,
        './node_modules/apexcharts-clevision'
      ),
    };

    return config;
  },
};

export default nextConfig;
