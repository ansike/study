const arr = [2, 8, 3, 1, 5, 7];

// const quickSort = (arr) => {
//   const newArr = [...arr];
//   const sort = (arr, left, right) => {
//     if (left >= right) return;
//     let i = left, j = right;
//     const base = arr[i];
//     while (i < j) {
//       while (i < j && arr[j] > base) {
//         j--;
//       }
//       if (arr[j] < base) {
//         arr[i] = arr[j];
//       }
//       while (i < j && arr[i] < base) {
//         i++;
//       }
//       if (i < j && arr[i] > base) {
//         arr[j] = arr[i];
//       }
//     }
//     arr[i] = base;
//     sort(arr, left, i - 1);
//     sort(arr, i + 1, right);
//   }

//   sort(newArr, 0, newArr.length - 1);
//   return newArr
// }
const quickSort = (arr) => {
  const newArr = [...arr];
  const sort = (arr, left, right) => {
    if (left >= right) return;
    let i = left, j = right;
    const base = arr[i];
    while (i < j) {
      while (i < j && arr[j] > base) j--;
      arr[i] = arr[j];
      while (i < j && arr[i] < base) i++;
      arr[j] = arr[i];
    }
    arr[i] = base;
    sort(arr, left, i - 1);
    sort(arr, i + 1, right);
  }

  sort(newArr, 0, newArr.length - 1);
  return newArr
}

// const quickSort = (arr) => {
//   const newArr = [...arr];
//   const deal = (arr, left, right) => {
//     if (left < right) {
//       const index = findIndex(arr, left, right);
//       deal(arr, left, index - 1);
//       deal(arr, index + 1, right);
//     }
//   }
//   deal(newArr, 0, newArr.length - 1)
//   return newArr
// }

// const findIndex = (arr, i, j) => {
//   const base = arr[i];
//   while (i < j) {
//     while (i < j && arr[j] > base) j--;
//     arr[i] = arr[j];
//     while (i < j && arr[i] < base) i++;
//     arr[j] = arr[i];
//   }
//   arr[i] = base;
//   return i;
// }
console.log(quickSort(arr))