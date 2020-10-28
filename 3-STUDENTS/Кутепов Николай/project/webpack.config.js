const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CopyPlugin({
            patterns: [{ from: './src/assets/img/', to: './img' }],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',     // будет такой файл
            chunkFilename: '[id].css'
        }),

    ],
    module: {
        rules: [
          {
            test: /\.css$/i,    // расширение на которое обращает внимание webpack
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
              test: /\.(jpg|png|svg|jpeg|gif)$/i,
              use: ['file-loader'],
          },
        ],
      }
}