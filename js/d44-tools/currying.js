
function curring(fn) {
  let length = fn.length;
  let init = 0;
  const deal = (val) => {
    length--;
    init = init + val;
    if (length) {
      return deal
    } else {
      return init
    }
  }
  return deal;
}

function add(a, b, c) {
  return a + b + c;
}

const newFn = curring(add);

console.log(newFn(1));
console.log(newFn(2));
console.log(newFn(3));