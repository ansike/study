/*
 * @Description: 批量处理请求,使用limit阈值限制最大请求数量
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-09 21:22:33
 * @LastEditTime : 2020-01-09 23:08:12
 Concurrent(arrData, 4, sendData).then(res => {      
  console.log(res);
});
 */

/**
 * @Description: description
 * @param {arr} 请求list
 * @param {limit} 阈值
 * @param {fn} 请求函数
 * @return:
 */
function Concurrent(arr, limit, fn) {
  if (limit > arr.length) limit = arr.length;
  let selfResolve;
  let index = 0;
  const promise = new Promise((resolve, reject) => {
    selfResolve = resolve;
  });
  const deal = () => {
    for (; index < limit; index++) {
      fn(arr[index]).then(res => {
        limit++;
        if (limit <= arr.length) {
          deal();
        } else {
          selfResolve("done");
        }
      });
    }
  };
  deal();
  return promise;
}

function Concurrent2(arr, limit, fn) {
  if (limit > arr.length) limit = arr.length;
  let promises = [];
  let index = 0;

  const deal = () => {
    if (index === arr.length) return Promise.resolve();
    let promise = fn(arr[index]);
    promise.then(res => {
      promises.splice(index, 1);
    });
    promises.push(promise);
    index++;
    let p = Promise.resolve();
    if (promises.length >= limit) {
      console.log("race", index);
      p = Promise.race(promises);
    }
    return p.then(() => deal());
  };
  return deal().then(res => Promise.all(promises));
}

// // const len = 10;
// // Concurrent(len, 4).then(res => {
// //   console.log(res);
// // });
// function pro(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log(sec);
//       resolve(sec);
//     }, 1000 * sec);
//   });
// }
