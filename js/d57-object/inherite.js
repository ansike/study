/*
 * @Description: 原型链继承
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-07-21 22:00:55
 * @LastEditTime: 2021-07-21 22:23:46
 */
function SuperType() {
  this.property = "super";
}
SuperType.prototype.getSuperName = function getSuperName() {
  console.log(this.property);
};
function SubType() {
  this.property1 = "sub";
}
SubType.prototype = new SuperType();
SubType.prototype.getSubName = function getSubName() {
  console.log(this.property);
};

const instance = new SubType();
instance.getSuperName();

console.log(instance instanceof SubType);
console.log(instance instanceof SuperType);
console.log(instance instanceof Object);

// 实现instanceof
function selfInstanceof(obj, obj2) {
  if (obj === null || obj2 === null) return false;
  let curProto = obj.__proto__;
  while (curProto) {
    if (curProto === obj2.prototype) {
      return true;
    } else {
      curProto = curProto.__proto__;
    }
  }
  return false;
}
function selfInstanceof2(obj, obj2) {
  if (obj === null || obj2 === null) return false;
  return obj2.prototype.isPrototypeOf(obj);
  
}

console.log('========');
console.log(selfInstanceof2(instance, SubType));
console.log(selfInstanceof2(instance, SuperType));
console.log(selfInstanceof2(instance, Object));
