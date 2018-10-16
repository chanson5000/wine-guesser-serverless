const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  entry: ['@babel/polyfill', './src/frontend/index.js'],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {test: /\.(jpe?g|gif|ico|png|svg|woff|ttf|wav|mp3|json)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/frontend')
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css'
    }),
      new CopyWebpackPlugin([
        {from: './public/favicon.ico'},
        {from: './public/manifest.json'}
      ])
  ]
});