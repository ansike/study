/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-12-12 13:16:11
 * @LastEditTime: 2019-12-12 13:31:38
 */
const path = require("path");
module.exports = {
  entry: "./main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  }
};
