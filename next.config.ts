import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Configuração para SVG
    const rules = config.module?.rules || [];
    config.module = {
      ...config.module,
      rules: [
        ...rules,
        {
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack']
        }
      ]
    };
    return config;
  }
};

module.exports = nextConfig;