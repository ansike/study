const arr = [1, 9, 8, 27, 16, 54, 32];
function main(arr, sort) {
  return find(arr, sort);
}
function find(arr, sort) {
  let res = 0;
  let partiton = (arr, start, end) => {
    if (start >= end) return;
    let l = start;
    let r = end;
    let pivot = arr[start];
    while (l < r) {
      // 先从右指针开始遍历,如果右指针对应的值比标识位大,指针向左移动
      while (l < r && arr[r] >= pivot) r--;
      // 如果右指针对应的值比标识位小,把右指针的值赋值给左指针对应的位置,左指针右移
      if (l < r) arr[l++] = arr[r];
      // 接着 从左指针开始遍历,如果左指针对应的值比标识位小,指针右移
      while (l < r && arr[l] < pivot) l++;
      // 如果左指针对应的值比标识位的值大,把做指针的值赋值给右指针,右指针左移
      if (l < r) arr[r--] = arr[l];
    }
    arr[l] = pivot;
    if (l === sort - 1) {
      res = arr[l];
      return;
    } else if (l < sort - 1) {
      partiton(arr, l + 1, end);
    } else if (l > sort - 1) {
      partiton(arr, start, l - 1);
    }
  };
  partiton(arr, 0, arr.length - 1);
  return res;
}
console.log(main(arr, 5));
