const compose = function compose(...funs){
  if(funs.length === 0){
    return arg => arg;
  }
  if(funs.length === 1){
    return funs[0];
  }
  return funs.reduce((prev, cur)=>{
    return (...args)=>{
      return prev(cur(...args));
    }
  })
}

function next(actions){
  console.log("[next]", actions);
}

function fn1Middleware(next){
  console.log("[fn1Middleware] trigger");
  return function next_from_fn1(action){
    console.log("[fn1Middleware] before next");
    next(action);
    console.log("[fn1Middleware] after next");
  }
}
function fn2Middleware(next){
  console.log("[fn2Middleware] trigger");
  return function next_from_fn2(action){
    console.log("[fn2Middleware] before next");
    next(action);
    console.log("[fn2Middleware] after next");
  }
}
function fn3Middleware(next){
  console.log("[fn3Middleware] trigger");
  return function next_from_fn3(action){
    console.log("[fn3Middleware] before next");
    next(action);
    console.log("[fn3Middleware] after next");
  }
}

// redux？？？

const registerFn = compose(fn1Middleware, fn2Middleware, fn3Middleware);
const onionFn = registerFn(next);
// console.log(onionFn);
onionFn("{data}");
