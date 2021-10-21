const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.config.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
