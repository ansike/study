/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-16 22:27:42
 * @LastEditTime: 2019-10-19 23:16:42
 */
//================= 1.移动端自适应布局实现
/**
  1.rem 布局,通过设置html根元素的font-size,来进行动态计算
  2.100%布局
  3.响应式布局,媒体查询
 */

//================== 2.script标签中async和defer实现的区别
/**
  相同点:都是异步的加载script,不会阻塞dom的解析和渲染
  不同点:async异步加载立即执行(多个带async的script会导致乱序执行),
  defer则是异步加载,DOM解析完成之后(DOMContentLoaded事件触发前)有序执行
 */

//===================3.requestAnimationFrame和setTimeout的区别
/**
  requestAnimationFrame是系统提供的,是浏览器刷新前的回调,每次刷新页面之前执行。受环境影响(页面是否可见，CPU 的占用情况等)
  setTimeout是浏览器提供的延时函数,延迟执行一段代码。延时队列中的任务到期后,延时函数中的代码会放到任务队列中等待执行,受系统任务的影响,会有一定的时延,
 */

//===================4.ajax fetch abort
// function selfAjax(options) {
//   let rejectFun = null;
//   let abortPromise = new Promise((resolve, reject) => {
//     rejectFun = () => {
//       reject('abort');
//     };
//   });

//   setTimeout(() => {
//     rejectFun();
//   }, 1000);

//   let fetchPromise = new Promise((resolve, reject) => {
//     fetch(options.url, {
//       body: JSON.stringify(options.data),
//       cache: 'no-cache',
//       credentials: 'include', // same-origin同域 omit不带凭证
//       headers: {
//         'user-agent': 'Mozilla/4.0 MDN Example',
//         'content-type': 'application/json'
//       },
//       method: (options.method && options.method.toUpperCase()) || 'GET',
//       mode: 'cors',
//       redirect: 'follow', // manual, *follow, error
//       referrer: 'no-referrer' // *client, no-referrer
//     })
//       .then(function(response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function(response) {
//         resolve(response);
//       })
//       .catch(function(e) {
//         reject(e);
//       });
//   });
//   return Promise.race([abortPromise, fetchPromise]);
// }

// let selfAjaxDemo = selfAjax({
//   url: 'http://askfuture.top/api/qaphone/question/hotlist?pn=1&rn=5',
//   method: 'get'
// })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => {
//     throw Error(e);
//   });

// ==================5.debounce

// ==================6.symbol
// 使用对象保证每次的唯一性
// https://segmentfault.com/a/1190000015262174
// 类型转换的时候对象先调用valueOf,在调用toString

// function selfSymbol(str) {
//   if (this instanceof selfSymbol)
//     return new TypeError('selfSymbol is not a constructor');
//   let sym = Object.create({
//     toString() {
//       return str ? `selfSymbol(${str})` : `selfSymbol`;
//     },
//     valueOf() {
//       return this;
//     }
//   });
//   return sym;
// }
// var s = selfSymbol();
// console.log(s);

// ===============7.电话号码的字母组合
/**
{
  0:"",
  1:"",
  2:"abc",
  3:"def",
  4:"ghi",
  5:"jkl",
  6:"mno",
  7:"pqrs",
  8:"tuv",
  9:"wxyz"
}
a, b, c
 */
/**
  1.循环数字字符串,循环字符串和数组进行组合 时间:O(n^3) 空间:O(n)
  2.递归方式
  */
const numbers = {
  0: '',
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};
// let phoneNumber = function(str) {
//   let res = [];
//   if (isNaN(Number(str))) return res;
//   for (let i = 0; i < str.length; i++) {
//     let curStr = numbers[str[i]];
//     if (res.length === 0) {
//       res = curStr.split('');
//       continue;
//     }
//     let secArr = [];
//     for (let j = 0; j < curStr.length; j++) {
//       secArr = [...res.map(item => item + curStr[j]), ...secArr];
//     }
//     res = secArr
//   }
//   return res;
// };

let phoneNumber = function(digits) {
  let res = [];
  const numbers = {
    0: '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  if (isNaN(Number(digits)) || !digits) return res;
  let combine = function(combineStr,digits) {
    if(digits.length === 0){
      res.push(combineStr);
      return;
    }
    let number = numbers[digits[0]];
    for (let i = 0; i < number.length; i++) {
      combine(combineStr + number[i], digits.substr(1));
    }
  };
  combine("", digits);
  return res;
};

console.log(phoneNumber(''));

// [a,b,c]
// d e f
