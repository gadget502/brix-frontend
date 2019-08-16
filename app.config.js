const packageJson = require('./package.json');

const APP_VERSION = packageJson.version;

const envConfig = {
  APP_VERSION,
}

module.exports = envConfig;
