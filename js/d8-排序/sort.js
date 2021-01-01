const data = [6, 3, -1, 5, 31, 0];
function selfSort(arr) {
  if (arr instanceof Array) {
    // return bubbleSort(arr);
    // return quickSort(arr);
    // return insertSort(arr);
    return selectSort(arr);
  } else {
    throw new Error("参数类型错误~");
  }
}
/**
 * @Description: 选择排序(不稳定)
 * @param {Array}
 * @return: []
 */
function selectSort(arr) {
  if (!arr instanceof Array) {
    return -1;
  }
  for (let i = 0, len = arr.length; i < len; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < min) {
        index = j;
      }
    }
    arr[i] = arr[index];
    arr[index] = min;
  }
  return arr;
}
/**
 * @Description: 插入排序(稳定)
 * @param {Array}
 * @return: []
 */
function insertSort(arr) {
  if (!arr instanceof Array) {
    return -1;
  }
  for (let i = 1, len = arr.length; i < len; i++) {
    let pol = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (pol < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = pol;
      }
    }
  }
  return arr;
}
/**
 * @Description: 快排
 * @param {Array}
 * @return: []
 */
function quickSort(arr) {
  if (!arr instanceof Array) {
    return -1;
  }
  const patition = (arr, start, end) => {
    // =========================一次排序开始
    // console.log(start, end);
    if (start >= end) return;
    // 初始化左右指针和标识位
    let l = start,
      r = end,
      pivot = arr[l];
    // 左指针小于右指针
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
    // 根据标识位的一次遍历结束把标识位的值放到左指针的位置
    // 此时:该标识位左边的值都比标识位的值小或者等,右边的值都比标识位的值大
    arr[l] = pivot;
    // ==========================一次排序end
    // 递归此时标识位左右两边的值
    patition(arr, start, l - 1);
    patition(arr, l + 1, end);
  };
  patition(arr, 0, arr.length - 1);
  return arr;
}

/**
 * @Description: 冒泡排序
 * @param {Array}
 * @return: []
 * 优化思路:   1.i和j的大小关系
 *           2.i和j的终止条件(这个可以很大程度的降低计算时间)
 */
function bubbleSort(arr) {
  if (!arr instanceof Array) {
    return -1;
  }
  let temp, lastIndex;
  for (let i = 0, lastIndex = arr.length; i < lastIndex - 1; i++) {
    for (let j = i + 1; j < lastIndex; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      lastIndex--;
      // console.log(lastIndex);
    }
  }
  return arr;
}

console.time();
console.log(selfSort(data));
console.timeEnd();
