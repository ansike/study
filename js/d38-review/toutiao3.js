/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-20 17:30:58
 * @LastEditTime: 2019-10-20 18:12:56
 */
/**
  实现一个foo函数,执行的时候返回当前函数的执行次数
  又一个reset方法可以重置这个过程
 */
// function foo1() {
//   let a = function() {
//     return a.times++;
//   };
//   a.times = 1;
//   a.reset = () => {
//     a.times = 1;
//   };
//   return a;
// }

// let foo = foo1();
// console.log(foo);
// console.log(foo());
// console.log(foo());
// console.log(foo());
// foo.reset();
// console.log(foo());
// console.log(foo());

/**
  实现一个sum函数,最后执行的时候返回前边相加的值
  sum(1,2)() sum(1)(2)() sum(1,2,3)(4)()
 */

// function Sum() {
//   let res = 0;
//   let fn = (...arg) => {
//     res += arg.reduce((prev, cur) => {
//       return prev + cur;
//     }, 0);
//     return fn;
//   };

//   fn.toString = function() {
//     return res;
//   };

//   return fn;
// }

// let sum = Sum();
// console.log(sum(1, 2, 3));
 /**
  new的执行过程
  return 的时候,如果手动return的是基础类型的话,会直接抛弃掉,返回的还是实例化的对象
                如果手动返回的是引用类型的话,会得到手动返回的类型
  */
function Person() {
  this.name = 1;
}

console.log(new Person());

 /**
  构造函数和原型链
  */
let p = new Person();
console.log(p.__proto__ === Person.prototype);
console.log(p.__proto__);
console.log(p.__proto__.__proto__);
console.log(p.__proto__.__proto__ === Object.prototype);
console.log(p.__proto__.__proto__.constructor === Object);
console.log(p.__proto__.__proto__.constructor.constructor);
console.log(p.__proto__.__proto__.constructor.constructor.constructor);
console.log(
  p.__proto__.__proto__.constructor.constructor ===
    p.__proto__.__proto__.constructor.constructor.constructor
);


// ======================================================================================================
// Object也是一个函数
console.log(Object.__proto__ === Function.prototype); 

// Object是原型链的顶层
console.log(Object.prototype.__proto__ === null);

// Function.prototype是一个普通对象
console.log(Function.prototype.__proto__ === Object.prototype);

// Function是一个函数（函数是 Function 的实例对象）
console.log(Function.__proto__ === Function.prototype);

// Object
console.log(Object.constructor=== Function);
console.log(Person);