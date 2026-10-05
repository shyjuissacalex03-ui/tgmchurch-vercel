/** @type {import('next').NextConfig} */
const nextConfig = {
  // No special settings needed: Vercel detects Next.js and builds it as is.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }],
      },
    ];
  },
};

export default nextConfig;
