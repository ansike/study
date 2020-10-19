/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2020-10-14 23:08:03
 * @LastEditTime: 2020-10-14 23:46:45
 */
function People(name) {
  this.name = name;
}

People.prototype.say = function say() {
  console.log(this.name);
}

const man = new People("man");

// 实例对象原型链
console.log("实例对象原型链");
console.log(man.__proto__ === People.prototype);
console.log(People.prototype.__proto__ === Object.prototype);

// 构造函数对象原型链
console.log("构造函数对象原型链");
console.log(People.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

// 特殊记忆
console.log(People === People.prototype.constructor);
console.log(Object.prototype.__proto__ === null);

// 函数的prototype是普通对象
console.log(typeof People.prototype);
// 1.Object，Function的prototype是函数对象
console.log(typeof Function.prototype);
console.log("typeof Object:", typeof Object);
console.log(Object.__proto__ === Function.prototype);
// 也就是说Function.__proto__ === Function.prototype
console.log(Function.__proto__ === Function.prototype);

// 1.所有对象都有proto属性，指向其构造函数的prototype。
// 2.函数对象的proto指向Function.prototype（除Function.prototype外，可能为了避免死循环？？），普通对象的proto指向Object.prototype
// 3.特殊记忆Object是函数，Function.prototype也是函数