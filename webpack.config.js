const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[path][name].[ext]'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  module: {  
    rules: [ 
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env']  
          }  
        }  
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[path][name].[ext]',
          //   },
          // },
        ],
      },
    ]  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      filename: "./index.html"
    })
  ],
};