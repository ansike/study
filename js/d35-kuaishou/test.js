/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-23 18:32:03
 * @LastEditTime: 2019-08-23 18:34:20
 */
function call(n) {
  if (n === 0) return console.log(1);
  return setTimeout(()=>{call(n - 2)},0);
}
call(50000)
