/** @type {import('next').NextConfig} */
const nextConfig = {
  // HAPUS baris output: 'export' di sini
  ...(process.env.VERCEL ? {} : { basePath: '/my-jlpt-web' }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
