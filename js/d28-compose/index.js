function compose(...arg) {
  if (arg.length == 0) return arg => arg;
  if (arg.length === 1) {
    return arg[0];
  }
  return arg.reduce((prev, cur) => {
    return (...arg) => {
      return prev(cur(...arg));
    };
  });
}

const a = val => {
  console.log("a" + val);
};
const b = val => {
  console.log("b" + val);
  return val;
};
const c = val => {
  console.log("c" + val);
  return val;
};
let t = compose(
  a,
  b,
  c
);
t(1);
// console.log:c1 b1 a1

// reduce 返回的过程
// times prev            cur return
// 1     a               b   val=> a(b(val))
// 2     val=> a(b(val)) c   val=> (val=> a(b(val)))(c(val))
