const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;
const devCss = ['style-loader', 'css-loader', 'sass-loader'];
const prodCss = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader']
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/, use: env === 'production' ? prodCss : devCss
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/**/*.json', to: 'assets', flatten: true },
      { from: {glob: 'src/assets/**/*.{png,svg}'}, to: 'assets/img', flatten: true}
    ]),
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: env !== 'production'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}