const removeImports = require('next-remove-imports')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id','jp'],
    defaultLocale: 'id',
  },
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      'react-slick',
      '@supabase/supabase-js'
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SUPABASE_URL ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname : 'localhost',
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "media.teguhharits.com",
        pathname: "/**",
      },
    ],
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'teguhharits.com',
      'kvlzhhttysvupongigmr.supabase.co',
      "images.unsplash.com"
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withBundleAnalyzer(withPWA(removeImports(nextConfig)));
