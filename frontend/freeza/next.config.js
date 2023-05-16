const BASE_PREFIX_FOR_APP = process.env.BASE_PREFIX_FOR_APP;

/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  assetPrefix: BASE_PREFIX_FOR_APP,
  basePath: BASE_PREFIX_FOR_APP,
  env: {
    basePath: BASE_PREFIX_FOR_APP,
    BASE_PATH: BASE_PREFIX_FOR_APP,
  },
  async rewrites() {
    return [];
  },
  images: {
    path: `${BASE_PREFIX_FOR_APP}/`,
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};
