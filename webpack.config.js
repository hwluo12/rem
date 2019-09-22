/*
 * @Description: webpack.config.js
 * @Author: hwluo
 * @Date: 2019-09-22 13:30:00
 * @LastEditTime: 2019-09-22 15:50:55
 * @LastEditors: hwluo
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
  //页面入口文件配置
  entry: [
    './app.js'
  ],
  //入口文件输出配置
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  //加载器配置
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  }
};