const withCss = require('@zeit/next-css');
const appConfig = require('./app.config');

module.exports = withCss({
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname + '/src');
    return config;
  },

  env: {
    ...appConfig,
  },
});
