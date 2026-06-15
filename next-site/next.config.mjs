/** Next.js configuration for static export */
const basePath = process.env.BASE_PATH || '';
const assetPrefix = process.env.BASE_PATH || '';

const config = {
  output: 'export',
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true
  }
};

export default config;
