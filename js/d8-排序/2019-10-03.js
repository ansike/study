/*
 * @Description:
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-03 14:35:21
 * @LastEditTime: 2019-10-03 18:09:00
 */
// 快速排序
// let arr = [11, 22, 3, 41, 9, 20];

// 时间复杂度是O(logn), 空间复杂度:O(1), 不稳定
// function quickSort(arr) {
//   let deal = (arr, l, r) => {
//     let tempL = l;
//     let tempR = r;
//     let cur = arr[l];
//     if (l > r) return cur;
//     while (tempL < tempR) {
//       while (tempL < tempR && cur < arr[tempR]) tempR--;
//       if (tempL < tempR) arr[tempL++] = arr[tempR];

//       while (tempL < tempR && cur > arr[tempL]) tempL++;
//       if (tempL < tempR) arr[tempR--] = arr[tempL];
//     }
//     arr[tempL] = cur;
//     deal(arr, l, tempL - 1);
//     deal(arr, tempL + 1, r);
//   };
//   deal(arr, 0, arr.length - 1);
//   return arr;
// }
// let arr4 = [7, 9, 2, 3, 41, 5, 6, 8, 1];
// console.log(quickSort(arr4, 5));

// let arr = [11, 22, 3, 41, 9, 20];

// 快速排序应用----第K大元素 时间复杂度是O(n)
// function quickSortK(arr, maxLen) {
//   let res;
//   let deal = (arr, l, r) => {
//     let tempL = l;
//     let tempR = r;
//     let cur = arr[l];
//     if (l > r) return cur;
//     while (tempL < tempR) {
//       while (tempL < tempR && cur < arr[tempR]) tempR--;
//       if (tempL < tempR) arr[tempL++] = arr[tempR];

//       while (tempL < tempR && cur > arr[tempL]) tempL++;
//       if (tempL < tempR) arr[tempR--] = arr[tempL];
//     }
//     arr[tempL] = cur;
//     if (tempL === maxLen - 1) {
//       res = cur;
//     }
//     deal(arr, l, tempL - 1);
//     deal(arr, tempL + 1, r);
//   };
//   deal(arr, 0, arr.length - 1);
//   return res;
// }
// let arr4 = [7, 9, 2, 3, 41, 5, 6, 8, 1];
// console.log(quickSortK(arr4, 5));

// 选择排序 时间复杂度: O(n^2) 最好时间复杂度和最坏时间复杂度, 空间复杂度:O(1), 不是稳定的排序算法---53529
// let arr = [11, 22, 3, 41, 9, 20];
// function choiceSort(arr) {
//   for (let l = 0; l < arr.length; l++) {
//     let cur = arr[l],
//       index = l;
//     for (let j = l + 1; j < arr.length; j++) {
//       if (cur > arr[j]) (cur = arr[j]), (index = j);
//     }
//     arr[index] = arr[l];
//     arr[l] = cur;
//   }
//   return arr;
// }
// console.log(choiceSort(arr));

// 插入排序 时间复杂度: O(n^2) 最好时间复杂度是O(n)[刚好有序],最坏时间复杂度是O(n^2)[刚好逆序], 空间复杂度:O(1), 是稳定的排序算法
// function insertSort(arr) {
//   for (let l = 0; l < arr.length - 1; l++) {
//     let next = arr[curIndex];
//     let curIndex = l + 1;
//     for (let r = l; r >= 0; r--) {
//       if (next < arr[r]) {
//         arr[curIndex] = arr[r];
//         arr[r] = next;
//         curIndex = r;
//       }
//     }
//   }
//   return arr;
// }

// let arr = [11, 22, 3, 41, 9, 20];
// function insertSort(arr) {
//   for (let l = 1; l < arr.length; l++) {
//     let next = arr[l];
//     let prevIndex = l - 1;
//     while (prevIndex >= 0 && arr[prevIndex] > next) {
//       arr[prevIndex + 1] = arr[prevIndex];
//       prevIndex--;
//     }
//     arr[prevIndex + 1] = next;
//   }
//   return arr;
// }
// console.log(insertSort(arr));

// 归并代码

function mergeSort(arr) {
  let deal = (arr, l, r) => {
    let tempL = l;
    let tempR = r;
    let middle = Math.floor((l + r) / 2);
    if (l >= r) return;
    deal(arr, l, middle);
    deal(arr, middle + 1, r);
    console.log(
      'splice',
      arr.slice(l, middle + 1),
      arr.slice(middle + 1, r + 1),
      arr
    );
    arr.splice(
      l,
      r - l + 1,
      ...merge(arr.slice(l, middle + 1), arr.slice(middle + 1, r + 1))
    );
  };
  deal(arr, 0, arr.length - 1);
  return arr;
}

console.log('mergeSort', mergeSort([4, 1, 3, 5, 8, 12, 22, 11]));

// 合并两组有序数组
function merge(arr1, arr2) {
  let arr = [];
  let length = arr1.length + arr2.length;
  let index1 = 0;
  let index2 = 0;
  for (let index = 0; index < length; index++) {
    if (!arr1[index1]) {
      arr = arr.concat(arr2.slice(index2));
      break;
    }
    if (!arr2[index2]) {
      arr = arr.concat(arr1.slice(index1));
      break;
    }

    if (arr1[index1] < arr2[index2]) {
      if (index1 < arr1.length) {
        arr.push(arr1[index1]);
        index1++;
      }
    } else {
      if (index2 < arr2.length) {
        arr.push(arr2[index2]);
        index2++;
      }
    }
  }
  return arr;
}
// console.log(merge([3], [2]));
