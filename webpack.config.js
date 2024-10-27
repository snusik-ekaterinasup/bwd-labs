const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/project.html',  // Укажите путь к project.html
        inject: true,
        chunks: ['project'],
        filename: 'project.html'
      })
      
  
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    open: true
  },

  mode: 'development'
};