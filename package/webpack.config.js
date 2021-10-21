const path = require('path'); // <-get absolute location for saving
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/index.ts', // <- starting point for bundle
  output: {
    path: path.resolve(__dirname, 'dist'), //<-where to save ur bundle
    filename: 'index.js', //<-filename for bundled file
    library: pkg.name,
    // libraryTarget: 'commonjs2', //<- to which version are we compiling js
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      // react: path.resolve(__dirname, './node_modules/react'),
      // 'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  target: 'node',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  // if we need to bundle anything extra with our code, if nothing entered means nothing else to compile, else we can mention, if, in case we want to bundle a particular third party code with our codebase
  // if we need to bundle anything extra with our code (3rd party package),we can add it as an argument to this method.
  // else, if nothing is passed as argument means no additional dependency to compile.
};
