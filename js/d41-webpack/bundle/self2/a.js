/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-12-13 22:46:02
 * @LastEditTime: 2019-12-13 23:42:08
 */
window["jsonp"].push({
  "./a.js": function(module, self_require) {
    console.log("a.js");
    module.exports = {
      a: 1
    };
  }
});
