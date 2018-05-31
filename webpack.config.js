const path = require('path');
// const HtmlwebpackPlugin = require('html-webpack-plugin');//生成html插件

module.exports = {
  mode: 'production',
  entry:path.join(__dirname, "app"),//入口文件
  output: {
    path: path.join(__dirname, "build"),//输出文件目录
    filename: 'bundle.js'//输出文件名称
  },
  devServer: {
    contentBase:path.join(__dirname, "public"),//配置服务器目标文件目录
    historyApiFallback: true,//不跳转
    hot: true,//实时更新
    inline: true,//实时刷新
    progress: true,//进度条
    host: '0.0.0.0',
    compress: true,//一切服务都启用gzip 压缩
    port: 8080
  }
};