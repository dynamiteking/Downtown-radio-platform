/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'i.scdn.co',
      'assets.downtownradio.live',
    ],
  },
};

module.exports = nextConfig;
