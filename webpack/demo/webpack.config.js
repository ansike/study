const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    contentBase: "./dist",
  },
  mode: process.env.NODE_ENV,
  // mode: "production",
  devtool: "inline-source-map",
  entry: {
    app: path.resolve(__dirname, "./src/index.js"),
    // another: path.resolve(__dirname, "./src/another-module.js"),
    // shared: "lodash",
    // app: {
    //   import: path.resolve(__dirname, "./src/index.js"),
    //   dependOn: "shared",
    // },
    // print: path.resolve(__dirname, "./src/print.js"),
    // another: {
    //   import: path.resolve(__dirname, "./src/another-module.js"),
    //   dependOn: "shared",
    // },
  },
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "caching",
      template: path.resolve(__dirname, "./index.html"),
    }),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // all options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css",
    //   ignoreOrder: false, // Enable to remove warnings about conflicting order
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it uses publicPath in webpackOptions.output
          //     publicPath: "../",
          //     // hmr: process.env.NODE_ENV === "development",
          //   },
          // },
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
};
