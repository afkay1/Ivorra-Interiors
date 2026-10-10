/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images in /public/images are already resized and compressed to WebP,
  // so they are served as-is (faster and more reliable than on-the-fly resizing).
  images: { unoptimized: true },
  poweredByHeader: false,
};
export default nextConfig;
