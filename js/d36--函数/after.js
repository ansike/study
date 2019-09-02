/*
 * @Description: 执行3次后再触发真正函数的执行
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-17 10:29:59
 * @LastEditTime: 2019-08-17 10:33:30
 */

const after = (times, fn) => {
  return () => {
    if (--times === 0) {
      fn();
    }
  };
};

const anyMethods = after(3, () => {
  console.log("执行");
});
anyMethods();
anyMethods();
anyMethods();