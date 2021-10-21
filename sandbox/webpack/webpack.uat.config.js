const webpack = require('webpack');
module.exports = {
  mode: 'uat',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('UAT'),
    }),
  ],
};
