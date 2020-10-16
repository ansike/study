/**
 * @param {number} n
 * @return {number}
 */

// 尾递归
var climbStairs = function(n, n1 = 1, n2 = 2) {
  if(n === 1) return n1;
  if(n === 2) return n2;
  return climbStairs(--n, n2, n1 + n2);
};

// 使用数组存储中间值，也可以直接使用变量存储
// var climbStairs = function(n) {
//     if(n === 1) return 1;
//     if(n === 2) return 2;
//     const temp = [1, 2];
//     for(let i = 2; i < n; i++){
//         temp[i] = temp[i - 1] + temp[i - 2];
//     }
//     return temp[n - 1];
// };

// 递归求解
// var climbStairs = function(n) {
//     if(n === 1) return 1;
//     if(n === 2) return 2;
//     return climbStairs(n-1) + climbStairs(n-2);
// };