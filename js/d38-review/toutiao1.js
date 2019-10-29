/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-14 18:21:40
 * @LastEditTime: 2019-10-14 20:56:15
 */
// 1.使用reduce实现map函数
/*
 了解map函数的规则
  1.循环执行,参数为function,function中的参数为:item,index,arr
  2.map函数将返回新的数组,如果自定义函数中没有return,则返回undefined数组
  3.
**/
Array.prototype.selfMap = function selfMap(fn) {
  console.log(this);
  if (!Array.isArray(this)) return new Error(`[ERROR ${this}] 类型错误`);
  if (this.length === 0) return;
  let res = [];
  this.reduce((prev, cur, index, arr) => {
    res.push(fn.call(null, cur, index, arr));
  }, 0);
  return res;
};

let done = [1, 2, 3].selfMap((item, index, ori) => {
  return item * 2;
});
console.log(done);

// 2.实现一个函数delay(fn,3,4000)(“hello”) 每间隔4秒打印一次“hello”，打印三次。
/*
  1.执行两次,说明肯定有柯里化,或者闭包的感觉,需要暂存第一次执行的数据
  2.每间隔4s,说明使用了同步步的方式去执行异步代码,es7的async最合适了
**/
function delay(fn, times, timeout) {
  return async function(content) {
    for (let index = 0; index < times; index++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          fn.call(this, content);
          resolve();
        }, timeout);
      });
    }
  };
}
let utils = delay(console.log, 3, 4000);
utils('hello');

// 4.手写一个双向绑定，input输入的值响应在p标签上
/*
  1.使用了defineProperties去监听data中属性的变化
  2.input内容改变,p标签内容改变; p标签内容改变的时候触发了data属性内容改变,影响input内容
  3.
**/ 
// 祥见:self-v-bind.html

// 4. 手写一个360旋转的动画 
// 详见rotate.html


// 1. 一个元素，先transform:translate(100px,100px),再rotate(45deg)的效果，以及两个操作颠倒执行后的效果
// 理解一下rotate旋转的是他的主轴 x,y