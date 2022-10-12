/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://hipproject-iuu08w7a0-haicaumuoi.vercel.app/api/project',
      },
    ];
  },
};
