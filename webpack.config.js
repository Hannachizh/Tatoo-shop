const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./src/data/products.json"],
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    index_catalog: path.resolve(__dirname, './src/index_catalog.js'),
    index_cabinet: path.resolve(__dirname, './src/index_cabinet.js'),
    index_errorPage: path.resolve(__dirname, './src/index_errorPage.js'),
    index_card: path.resolve(__dirname, './src/index_card.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, './src/catalog.html'),
      filename: 'catalog.html',
      chunks: ['index_catalog']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/cabinet.html'),
      filename: 'cabinet.html',
      chunks: ['index_cabinet']
    }),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, './src/errorPage.html'),
      filename: 'errorPage.html',
      chunks: ['index_errorPage']
    }),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, './src/card.html'),
      filename: 'card.html',
      chunks: ['index_card']
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/images", to: "images"
        }
      ]
    })
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],  //(если вы используете windows7, строку 'sass-loader' удалите.)
      },
      {
        test: /\.(HTML)$/,
        include: path.join(__dirname, "src/views"),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    //contentBase: path.resolve(__dirname, 'dist'),
    static: './dist',
    open: true, compress: true, hot: true, port: 8081,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          chunks: 'all'
        }
      }
    }
  }
}