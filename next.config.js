const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
module.exports = withCSS(
  withSass({
    cssModules: true,
    distDir: '_next',
    cssLoaderOptions: {
      localsConvention: 'dashes',
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    },
  }),
);
