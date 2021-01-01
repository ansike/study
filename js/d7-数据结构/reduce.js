
let temp = [1,2,3,4].reduce((prev,cur,index,arr)=> {
    return prev + cur
});
console.log(temp)


function f1(val) {
  // console.log('f1', val)
  return val++;
}
function f2(val) {
  // console.log('f2', val);
  return val+=4;
}
function f3(val) {
  // console.log('f3', val);
  return val += 3;
}
function f4(val) {
  // console.log('f4', val);
  return val += 5;
}

function compose(...arg) {
  if(arg.length==0) return;

  return arg.reduce((prev,cur)=>{
    return (val) => {
      return prev(cur(val));
    }
  })  
}
// let compose = function (...funcs) {

//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }
let com = compose(f1,f2,f3,f4);
let a =1 ; 
// com(a)
console.log(com(a));

// let arr = new Set([1,2,3,1,3,4])
// console.log([...arr])
