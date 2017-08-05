const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const env = process.env.NODE_ENV;
const extractCoreCss = new ExtractTextPlugin({
  filename: 'main.css',
  disable: env !== 'production'
});
const extractCriticalCss = new ExtractTextPlugin('critical.css');
const inlineScss = ['style-loader', 'css-loader', 'sass-loader'];
const bundledScss = ExtractTextPlugin.extract({
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
        test: /\.scss$/, use: env === 'production' ?
          extractCoreCss.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }) :
          inlineScss
      },
      {
        test: /\.css$/, use: extractCriticalCss.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
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
      { from: { glob: 'src/assets/**/*.{png,svg,jpg,jpeg}' }, to: 'assets/img', flatten: true }
    ]),
    extractCoreCss,
    extractCriticalCss,
    new StyleExtHtmlWebpackPlugin('critical.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}