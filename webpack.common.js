const os = require('os')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const threadLoader = require('thread-loader')
const OUT_DIR = path.resolve(__dirname, 'out')
const PUBLIC_DIR = path.resolve(OUT_DIR, 'public')

const threadPoolOptions = {
  workers: os.cpus().length / 2,
  workerParallelJobs: 50
}

threadLoader.warmup(threadPoolOptions, ['ts-loader'])


module.exports = {
  bail: true,
  entry: {
    app: './client/test.ts',
    styles: './client/sass/style.scss'
  },
  output: {
    path: OUT_DIR,
    publicPath: PUBLIC_DIR,
    filename: '[name].js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'client/test.txt', to: 'public/texts/'}
      ]
    }),
    new MiniCssExtractPlugin({ filename: '/public/css/app.css'})
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /(node_modules)/,
        use: [
          'thread-loader',
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              silent: true,
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: PUBLIC_DIR
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },

    ]
  }
}
