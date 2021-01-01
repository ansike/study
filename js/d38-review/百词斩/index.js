// 一个大小为n的数组，里面的数都属于范围[0, n-1]，有不确定的重复元素，找到至少一个重复元素；
// 要求O(1)空间和O(n)时间；
const arr = [1, 2, 3, 2, 1, 4];

const fn1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}
// 规律：一个大小为n的数组，里面的数都属于范围[0, n-1]，
// 可以将值和下标一一对应，遇到重复的值和下标直接返回
const fn2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    while (i !== arr[i]) {
      if (arr[i] === arr[arr[i]]) {
        return arr[i]
      } else {
        let temp = arr[arr[i]];
        arr[arr[i]] = arr[i];
        arr[i] = temp;
      }
    }
  }
}

// console.log(fn1(arr));
console.log(fn2(arr));
