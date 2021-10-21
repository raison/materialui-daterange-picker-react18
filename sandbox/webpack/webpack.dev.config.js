const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 4000,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('DEV'),
    }),
    // preserve component state - w/ hot module replacement
    new ReactRefreshWebpackPlugin(),
  ],
};
