/*
 * @Description: js版本的groupBy
 * @Description: 实现promise的顺序执行
 * @Description: 反向compose实现
 * @Description: 正向compose实现
 * @Description: 实现map
 * @Description: reduce polyfill
 */
var people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 }
];
/*
    =>
  { 
    '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
    '21': [ { name: 'Alice', age: 21 } ] 
  }
  */

/**
 * @Description: js版本的groupBy
 */
function groupBy(data, group) {
  return data.reduce((prev, cur) => {
    if (!prev[cur[group]]) {
      prev[cur[group]] = [];
    }
    prev[cur[group]].push(cur);
    return prev;
  }, {});
}
console.log(groupBy(people, "age"));

/**
 * @Description: 实现promise的顺序执行
 */
function runPromiseInSequence(funArr, ipt) {
  return funArr.reduce((prev, cur) => prev.then(cur), Promise.resolve(ipt));
}
function p1(a) {
  return new Promise(resolve => {
    resolve(a * 1);
  });
}
function p2(a) {
  return new Promise(resolve => {
    resolve(a * 2);
  });
}
function f3(a) {
  return a * 3;
}
function f5(a) {
  return a - 5;
}
function p4(a) {
  return new Promise(resolve => {
    resolve(a * 4);
  });
}
runPromiseInSequence([p1, p2, f3, f5, p4], 10).then(console.log);

// compose实现
function compose(...funs) {
  return funs.reduce((prev, cur) => {
    return function(val) {
      return prev(cur(val));
    };
  });
}

const double = x => x + 1;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

let com = compose(double, triple, quadruple);
console.log("compose", com(2));

// 正向compose实现
function compose2(...funs) {
  return function(ipt) {
    return funs.reduce((prev, cur) => {
      return cur(prev);
    }, ipt);
  };
}
let com2 = compose2(double, triple, quadruple);
console.log("compose2", com2(2));

// 实现map

// Array.prototype.selfMap = function(callback, thisArg) {
//   return this.reduce((prev, cur, index, arra) => {
//     prev[index] = callback.call(thisArg, cur, index, arra);
//     return prev;
//   }, []);
// };

Array.prototype.selfMap = function(callback, thisArg) {
  let res = [];
  this.forEach((item, index, arra) => {
    res[index] = callback.call(thisArg, item, index, arra);
  });
  return res;
};
const arr = [1, 2, , 3, 9];

console.log(arr.selfMap(item => item * 2 + 1));

// reduce polyfill

Object.defineProperty(Array.prototype, "selfReduce", {
  value: function(callback, arg) {
    let index = 0;
    let prev = arg;
    if (this === null) {
      throw new TypeError(
        "Array.prototype.reduce " + "called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    if (typeof arg === "undefined") {
      prev = this[index];
      index++;
    }
    
    while (index < this.length) {
      let cur = this[index];
      prev = callback(prev, cur, index, this);
      index++;
    }
    return prev;
  }
});

console.log(
  "selfReduce1",
  [1, 2, 3].selfReduce((prev, cur, index, arr) => {
    return prev + cur;
  }, 10)
);

console.log(
  "selfReduce2",
  [1, 2, 3].selfReduce((prev, cur, index, arr) => {
    return prev + cur;
  })
);

// self compose实现
function selfcompose(...funs) {
  return funs.selfReduce((prev, cur) => {
    return function(val) {
      return prev(cur(val));
    };
  });
}

let selfcom = selfcompose(double, triple, quadruple);
console.log("selfcompose", selfcom(2));
