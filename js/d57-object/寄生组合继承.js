/*
 * @Description: 原型链继承
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-07-21 22:00:55
 * @LastEditTime: 2021-07-21 22:51:56
 */
function inheritPrototype(obj1, obj2) { 
  const prototype = Object.create(obj2.prototype);
  prototype.constructor = obj1;
  obj1.prototype = prototype;
}
function SuperType() {
  this.property = "super";
}
SuperType.prototype.getSuperName = function getSuperName() {
  console.log(this.property);
};
function SubType() {
  SuperType.call(this);
  this.property1 = "sub";
}
inheritPrototype(SubType, SuperType);
SubType.prototype.getSubName = function getSubName() {
  console.log(this.property);
};

const instance = new SubType();
instance.getSuperName();

console.log(instance instanceof SubType);
console.log(instance instanceof SuperType);
console.log(instance instanceof Object);
console.log(instance);
console.log(instance.__proto__);
