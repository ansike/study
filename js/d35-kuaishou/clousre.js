/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-28 23:23:14
 * @LastEditTime: 2019-08-28 23:26:53
 */
var a = 1;
function A() {
  console.log(a);
  var a = 2;
  return function() {
    a++;
    console.log(a);
    console.log(this.a);
    this.a = 4;
  };
}
var q = A(); //undefined 
q() // 3 1