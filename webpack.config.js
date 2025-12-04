// webpack.config.js
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/bearysBreakfastBar.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/bearysBreakfastBar.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, // Rule for CSS files
      {
        test: /\.html$/i,
        loader: "html-loader",
      }, // Added rule for HTML files
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }, // Added rule for image assets
    ],
  },
};

//Nodejs uses CJS instead of ESM for webpack config files
//So we use require and module.exports instead of import and export