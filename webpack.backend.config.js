import path from 'path';
import awsExternals from 'webpack-aws-externals';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/backend/index.js',
  externals: [awsExternals()],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward'
          }
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/backend')
  }
};
