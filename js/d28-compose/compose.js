const selfCompose = function selfCompose (...args) {
  if(args.length === 0){
    return args => args;
  }else if(args.length === 1){
    return args[0];
  }

  return args.reduce((prev, cur) => {
    return function combine (...argv) {
      return prev(cur(...argv));
    }
  })
}
const selfComposeLeft = function selfCompose (...args) {
  if(args.length === 0){
    return args => args;
  }else if(args.length === 1){
    return args[0];
  }

  return args.reduce((prev, cur) => {
    return function combine (...argv) {
      return cur(prev(...argv));
    }
  })
}

const fn1 = (a) => {
  console.log("f1");
  return a + 1
}
const fn2 = (a) => {
  console.log("f2");
  return a - 2
}
const fn3 = (a) => {
  console.log("f3");
  return a * 3
}

// const combine = selfCompose(fn1, fn2, fn3);
// const res = combine(1);
// console.log(res);

const combine = selfComposeLeft(fn1, fn2, fn3);
const res = combine(1);
console.log(res);

module.exports = selfCompose;