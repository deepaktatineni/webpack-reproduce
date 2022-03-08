const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = merge(common, {
  mode: 'development',
  devtool: 'sourceMap',
  plugins: [
    new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map', exclude: /vendor|styles/ }),
    new LiveReloadPlugin(),
    new BundleAnalyzerPlugin()
  ]
})
