/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-05 16:06:19
 * @LastEditTime: 2019-10-05 16:14:10
 */
let str = '{"id":932089,"age":12},{"id":932080,"age":2}';
let buf = Buffer.alloc(str.length, str);
console.log(buf);
console.log(buf.toString());
