import { withPayload } from '@payloadcms/next/withPayload'
import redirects from './redirects.js'


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'blog-by-max.vercel.app'], // 👈 Явно добавили допустимые хосты
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
