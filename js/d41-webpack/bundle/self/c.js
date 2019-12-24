/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-12-13 22:46:02
 * @LastEditTime: 2019-12-14 00:04:25
 */
window["jsonp"].push({
  "./c.js": function(module, self_require) {
    console.log("c.js");
    module.exports = {
      c: 1
    };
  }
});
