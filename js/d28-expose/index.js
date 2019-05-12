let upper = val => val.toUpperCase();
let first = val => val[2];
let reverse = val => {
  let temp = val.split('').reverse();
  console.log("reverse", temp)
  return temp;
}
let getfirst = val => {
  let temp = val.substr(0, 3);
  console.log('getfirst',
    temp)
  return temp;
}
// console.log(upper('object'));
// console.log(first('object'));
// console.log(reverse('object'));


let compose = function (...funcs) {
  if(funcs.length ===0) {
    return arg => arg
  }

  if(funcs.length ===1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

let temp = compose(upper, first, reverse, getfirst);

console.log('temp',
  temp('object'));