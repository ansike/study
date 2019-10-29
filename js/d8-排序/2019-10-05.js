/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-05 09:56:46
 * @LastEditTime: 2019-10-05 15:12:44
 */
let arr = [52, 4, 1, 4, 6, 3];
// =================================================================n^2
// 依次冒泡 - 时间:O(n^2) 空间:O(1) 稳定
// function bubbleSort(arr) {
//   let temp;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr.length - i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));

// 依次插入排序 - 时间:O(n^2) 空间:O(1) 稳定
// function insertSort(arr) {
//   for (let index = 1; index < arr.length; index++) {
//     let j = index - 1;
//     let cur = arr[index];
//     while (j >= 0 && cur < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = cur;
//   }
//   return arr
// }
// console.log(insertSort(arr));

// 选择排序 - 时间:O(n^2) 空间:O(1) 不稳定-存在大幅度交换位置
// function choiceSort(arr) {
//   let length = arr.length;
//   for (let index = 0; index < length; index++) {
//     let j = length;
//     let cur = arr[index];
//     let curIndex = index;
//     while (j > index) {
//       if (arr[j] < cur) {
//         cur = arr[j];
//         curIndex = j;
//       }
//       j--;
//     }
//     arr[curIndex] = arr[index];
//     arr[index] = cur;
//   }
//   return arr;
// }
// console.log(choiceSort(arr));
// =================================================================nlogn
// 快速排序 - 时间:O(nlogn) 空间:O(1) 不稳定-存在大幅度交换位置
// function quickSort(arr) {
//   let length = arr.length;
//   let deal = (arr, left, right) => {
//     if (left >= right) return;
//     let l = left;
//     let r = right;
//     let curIndex = Math.floor((right + left) / 2);
//     let cur = arr[curIndex];
//     while (l < r) {
//       // 等于号确保有相同的数做比较
//       while (l < r && arr[l] <= cur) l++;
//       if (l < r) {
//         arr[curIndex] = arr[l];
//         curIndex = l;
//         l++;
//       }
//       while (l < r && arr[r] >= cur) r--;
//       if (l < r) {
//         arr[curIndex] = arr[r];
//         curIndex = r;
//         r--;
//       }
//     }
//     arr[curIndex] = cur;
//     deal(arr, left, curIndex - 1);
//     deal(arr, curIndex + 1, right);
//   };
//   deal(arr, 0, length - 1);
//   return arr;
// }
// console.log(quickSort(arr));
// 归并排序 - 时间:O(nlogn) 空间:O(1) 稳定-merge操作
// function mergeSort(arr) {
//   let length = arr.length;
//   let merge = (arr1, arr2) => {
//     let length = arr1.length + arr2.length;
//     let arr = [];
//     let arr1Index = 0;
//     let arr2Index = 0;
//     for (let index = 0; index < length; index++) {
//       if (arr1Index > arr1.length - 1) {
//         // 注意是要切割没有参与比较剩余的数
//         arr = arr.concat(arr2.slice(arr2Index));
//         break;
//       }
//       if (arr2Index > arr2.length - 1) {
//         arr = arr.concat(arr1.slice(arr1Index));
//         break;
//       }
//       if (arr1[arr1Index] <= arr2[arr2Index]) {
//         arr.push(arr1[arr1Index]);
//         arr1Index++;
//       } else {
//         arr.push(arr2[arr2Index]);
//         arr2Index++;
//       }
//     }
//     return arr;
//   };
//   let deal = (arr, left, right) => {
//     let index = Math.floor((right + left) / 2);
//     if (left >= right) return;
//     deal(arr, left, index);
//     deal(arr, index + 1, right);
//     // console.log(arr.slice(left, index + 1), arr.slice(index + 1, right + 1));
//     arr.splice(
//       left,
//       right - left + 1,
//       ...merge(arr.slice(left, index + 1), arr.slice(index + 1, right + 1))
//     );
//   };
//   // console.log(merge([1, 4, 52], [3, 4, 6]));
//   deal(arr, 0, length - 1);
//   return arr;
// }
// console.log(mergeSort(arr));

// 堆排序 - 时间:O(nlogn) 空间:O(1) 不稳定-存在大幅度交换位置
function heapSort(arr) {
  let buildMaxHeap = arr => {
    let length = arr.length;
    let index = Math.floor(length / 2);
    while (index >= 0) {
      heapify(arr, index, length);
      index--;
    }
  };
  let swapHeap = (arr, l, r) => {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
  };
  let heapify = (arr, index, length) => {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let maxIndex = index;
    if (left < length && arr[left] > arr[maxIndex]) {
      maxIndex = left;
    }
    if (right < length && arr[right] > arr[maxIndex]) {
      maxIndex = right;
    }
    if (maxIndex != index) {
      swapHeap(arr, index, maxIndex);
      heapify(arr, maxIndex, length);
    }
  };
  buildMaxHeap(arr);
  // console.log(arr);
  let length = arr.length;
  while (length) {
    swapHeap(arr, 0, length - 1);
    length--;
    heapify(arr, 0, length);
  }
  return arr;
}
// console.log(heapSort(arr));

// =================================================================n
// 桶排序
// 基数排序
// 计数排序