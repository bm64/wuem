const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: { localsConvention: "dashes", camelCase: true },
  distDir: "_next"

  /* config options here */
});
