const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ], 
  },
  devServer: {
    port: 9000
  }
}