/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // locally-hosted Unsplash downloads live in /public/images — no remote patterns needed.
  },
}

export default nextConfig
