/** @type {import('next').NextConfig} */

//Use images from any path not just static folder
const withImages = require('next-images')
module.exports = withImages

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: './',
  images: {
    loader: 'akamai', //akamai loader supports images in next export
    path: '',
  },
}


module.exports = nextConfig

