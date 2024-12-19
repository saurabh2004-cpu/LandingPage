/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tse4.mm.bing.net',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['pbs.twimg.com',"demo.awaikenthemes.com"],
  },
};

module.exports = nextConfig;
