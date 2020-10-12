/*
 * @Description: 正则抽取字符串内容
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-15 10:49:19
 * @LastEditTime : 2020-01-15 10:58:38
 */
// 1. "2.89元"
const str1 = "2.89元";
console.log(parseFloat(str1));

// 2. "生于1999年"这样字符串中只含有一个整型数值的字符串,直接使用正则表达式将数字的字符删除掉就行:
const str2 = "生于1999年";
console.log(str2.replace(/[^\d]/g,''));

// 3. 对于字符串中含有多数值,使用字符串的match方法,通过正则表达式提取字符串的所有数字(包含整数和小数):
var str3 = "大米:2.57斤/元,白菜:3.65元/斤";
console.log(str3.match(/\d+(\.\d+)?/g));