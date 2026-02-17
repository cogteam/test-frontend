// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // KEEP YOUR EXISTING WEBPACK CONFIGURATION
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|pdf)$/,
      type: "asset/resource",
      generator: {
        filename: "static/videos/[name].[hash][ext]",
      },
    });

    return config;
  },

  // ADD THE NEW IMAGES CONFIGURATION HERE
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '10.5.50.55',
        port: '8001',
        // This pathname is necessary because you are using an explicit port.
        pathname: '/uploads/blog/**', 
      },
    ],
  },
};

export default nextConfig;