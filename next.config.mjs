/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  compress: true,
  productionBrowserSourceMaps: true,


  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
