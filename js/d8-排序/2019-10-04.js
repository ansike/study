/*
 * @Description:
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-03 14:35:21
 * @LastEditTime: 2019-10-04 23:28:42
 */
let arr = [11, 22, 3, 41, 9, 20];

// 选择排序 时间复杂度: O(n^2) 最好时间复杂度和最坏时间复杂度, 空间复杂度:O(1), 不是稳定的排序算法---eg:53529
// function choiceSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     // 关键点1:最小值应该使用变量暂存,在查找过程中会不断变化的
//     let min = arr[i];
//     // 关键点2:最小值的下标在变化之后需要从内层循环中穿透出来
//     let index = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//         index = j;
//       }
//     }
//     arr[index] = arr[i];
//     arr[i] = min;
//   }
//   return arr;
// }
// console.log(choiceSort(arr));

// 插入排序 时间复杂度: O(n^2) 最好时间复杂度是O(n)[刚好有序],最坏时间复杂度是O(n^2)[刚好逆序], 空间复杂度:O(1), 是稳定的排序算法
// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let cur = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > cur) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = cur;
//   }

//   return arr;
// }
// console.log(insertSort(arr));

// 快速排序
// 时间复杂度是O(logn), 空间复杂度:O(1), 不稳定
// function quickSort(arr) {
//   let deal = (arr, l, r) => {
//     if (l >= r) return;
//     let tempL = l;
//     let tempR = r;
//     let curIndex = Math.floor((l + r) / 2);
//     let cur = arr[curIndex];
//     while (tempL < tempR) {
//       while (tempL < tempR && cur > arr[tempL]) tempL++;
//       if (tempL < tempR && cur < arr[tempL]) {
//         arr[curIndex] = arr[tempL];
//         curIndex = tempL;
//         tempL++;
//       }
//       while (tempL < tempR && cur < arr[tempR]) tempR--;
//       if (tempL < tempR && cur > arr[tempR]) {
//         arr[curIndex] = arr[tempR];
//         curIndex = tempR;
//         tempR--;
//       }
//     }
//     arr[curIndex] = cur;
//     deal(arr, l, curIndex - 1);
//     deal(arr, curIndex + 1, r);
//   };
//   deal(arr, 0, arr.length - 1);
//   return arr;
// }
// console.log(quickSort(arr));

// 归并代码 时间复杂度: O(nlogn) 最好时间复杂度是O(nlogn),最坏时间复杂度是O(nlogn), 空间复杂度:O(n), 是稳定的排序算法
// 分步想:第一步写出merge代码,第二步在考虑递归合并
// function mergeSort(arr) {
//   let deal = (arr, l, r) => {
//     if (l >= r) return;
//     let curIndex = Math.floor((l + r) / 2);
//     deal(arr, l, curIndex);
//     deal(arr, curIndex + 1, r);
//     // 切记slice的第二个参数是不包含最后一项的,merge完之后记得赋值
//     arr.splice(
//       l,
//       r - l + 1,
//       ...merge(arr.slice(l, curIndex + 1), arr.slice(curIndex + 1, r + 1))
//     );
//   };
//   deal(arr, 0, arr.length - 1);
//   return arr;
// }
// function merge(arr1, arr2) {
//   let arr = [];
//   let length = arr1.length + arr2.length;
//   let arr1Index = 0;
//   let arr2Index = 0;
//   for (let index = 0; index < length; index++) {
//     if (arr1Index > arr1.length - 1) {
//       arr = arr.concat(arr2.slice(arr2Index));
//       break;
//     }
//     if (arr2Index > arr2.length - 1) {
//       arr = arr.concat(arr1.slice(arr1Index));
//       break;
//     }
//     if (arr1[arr1Index] < arr2[arr2Index]) {
//       arr.push(arr1[arr1Index]);
//       arr1Index++;
//     } else {
//       arr.push(arr2[arr2Index]);
//       arr2Index++;
//     }
//   }
//   return arr;
// }
// // console.log(merge([11, 22], [5]));
// console.log(mergeSort(arr));

// 堆排序,数组存储数据结构
// 父亲i  左子:2*i+1,右子:2*i+2
// 左子i  父亲:(i-1)/2 右兄:i+1
// 右子i  父亲:(i-2)/2 左兄:i-1
function heapSort(arr) {
  let length = arr.length;
  let buildMaxHeap = (arr, length) => {
    for (let index = Math.floor(length / 2); index >= 0; index--) {
      heapify(arr, index, length);
    }
  };
  let heapify = (arr, index, length) => {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let largest = index;
    if (left < length && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest != index) {
      swapHeap(arr, largest, index);
      heapify(arr, largest);
    }
  };
  let swapHeap = (arr, last, after) => {
    let temp = arr[last];
    arr[last] = arr[after];
    arr[after] = temp;
    // console.log(arr);
  };
  let deal = (arr, length) => {
    // 处理大顶堆数组
    for (let index = arr.length - 1; index > 0; index--) {
      swapHeap(arr, 0, index);
      length--;
      heapify(arr, 0, length);
    }
  };

  // 直接调整传入的数组成为大顶堆
  buildMaxHeap(arr, length);
  deal(arr, length);
  return arr;
}
// console.log(heapSort([3, 5, 2, 1, 6, 7, 10]));
// // console.log(heapSort(arr));

//====================================================
// 桶排序
function bucketSort(arr) {
  let deal = arr => {
    console.log(arr);
    let max = Math.max.apply(null, arr);
    let min = Math.min(...arr);
    let length = arr.length;
    let bucketSize = 4;
    let bucketNum = Math.floor((max - min) / bucketSize) + 1;
    // 构建桶
    let bucket = Array.from({ length: bucketNum }, () => []);
    let newArr = [];

    console.log(bucket);
    // 桶中插入数据
    for (let index = 0; index < arr.length; index++) {
      bucket[Math.ceil(arr[index] / bucketSize) - 1].push(arr[index]);
    }
    
    console.log(bucket);
    // 处理桶中的数据
    for (let index = 0; index < bucket.length; index++) {
      bucket[index] = heapSort(bucket[index]);
      newArr = newArr.concat(bucket[index]);
    }

    console.log(bucket);
    return newArr;
  };
  
  return deal(arr);
}
console.log(bucketSort([3, 5, 2, 1, 6, 7, 10]));
