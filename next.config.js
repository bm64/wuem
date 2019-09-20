const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
module.exports = withCSS(
  withSass({
    cssModules: true,
    distDir: '_next',
    cssLoaderOptions: {
      camelCase: true,
      localsConvention: 'dashes',
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
);
