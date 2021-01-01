const a = [1, 2, 3];

Array.prototype.selfReduce = function selfReduce(fn, prev) {
  const arr = this;
  if (prev !== undefined) {
    for (let i = 0; i < arr.length; i++) {
      prev = fn.call(arr, prev, arr[i], i, arr);
    }
  } else {
    prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
      prev = fn.call(arr, prev, arr[i], i, arr);
    }
  }
  return prev;
};

const res = a.selfReduce((prev, cur, index, arr) => {
  console.log(index, arr);
  return prev + cur;
}, 0);

console.log(res);