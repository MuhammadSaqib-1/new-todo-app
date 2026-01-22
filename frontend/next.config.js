/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:8000',
  },
  // Enable API proxy for local development
  // Vercel will override this with its own configuration in production
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_BACKEND_API_URL ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/:path*` : 'http://localhost:8000/:path*',
      },
    ]
  },
}

module.exports = nextConfig