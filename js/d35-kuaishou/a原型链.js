/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-19 15:26:34
 * @LastEditTime: 2019-08-19 15:35:31
 */
function A(val) {
  this.a = val || 2;
}
A.prototype.a = 3;
function B(vBl) {
  A.call(this, 1);
}
B.prototype = new A();
B.prototype.constructor = B;

let a = new A();
let b = new B();

console.log(new A().a);
console.log(A.a);
console.log(new B().a);
console.log(B.a);

console.log(a.a);
console.log(b.a);
delete a.a;
console.log(a.a);
console.log(b.a);
delete b.a;
console.log(b.a);

