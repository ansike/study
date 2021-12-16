/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-11-11 09:21:26
 * @LastEditTime: 2021-11-11 09:31:28
 */
function* onDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}
const primes = onDigitPrimes();
console.log(primes.next());
console.log([...primes]);

function* Range(from, to) {
  for (let index = from; index <= to; index++) {
    yield index;
  }
}
console.log([...Range(3, 5)]);

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}
function fibonacciSequence1(n) {
  let x = 0,
    y = 1;
  for (;;) {
    if (n-- <= 0) {
      return y;
    }
    [x, y] = [y, x + y];
  }
}
// console.log([...fibonacciSequence()]);
console.log(fibonacciSequence1(20));
