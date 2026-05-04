/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-jlpt-web',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
