const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const OUT_DIR = path.resolve(__dirname, 'out')
const PUBLIC_DIR = path.resolve(OUT_DIR, 'public')


module.exports = {
  mode: 'development',
  bail: true,
  entry: {
    'app.js': './src/index.js',
    'public/css/app.css': './src/sass/style.scss'
  },
  output: {
    path: OUT_DIR,
    publicPath: PUBLIC_DIR,
    filename: '[name]'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'src/test.txt', to: 'public/texts/'}
      ]
    }),
    new MiniCssExtractPlugin({ filename: '/public/css/app.css'})
  ],
  module: {
    rules: [
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
