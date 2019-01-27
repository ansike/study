let upper = val => val.toUpperCase();
let first = val => val[0];
let reverse = val => val.split('').reverse();
console.log(upper('object'));
console.log(first('object'));
console.log(reverse('object'));


let compose = function (...func) {
  if(funcs.length ===0) {
    return arg => arg
  }

  if(funcs.length ===1) {
    return funcs[0]
  }

  return func.reduce((a, b) => (...args) => a(b(...args)));
}

let temp = compose(upper, first, reverse);

console.log(temp('object'));