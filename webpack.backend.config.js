const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/backend/index.js'],
  externals: [
    nodeExternals({
      whitelist: [
        '@babel/polyfill',
        'core-js/es6',
        'core-js/fn/array/includes',
        'core-js/fn/string/pad-start',
        'core-js/fn/string/pad-end',
        'core-js/fn/symbol/async-iterator',
        'core-js/fn/object/get-own-property-descriptors',
        'core-js/fn/object/values',
        'core-js/fn/object/entries',
        'core-js/fn/promise/finally',
        'core-js/web',
        'regenerator-runtime/runtime'
      ]
    })
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/backend')
  },
  target: 'node'
};
