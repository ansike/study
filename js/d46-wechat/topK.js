const arr = [8, 3, 2, 5, 7];

const quickSort = (arr) => {
  const newArr = [...arr];
  const deal = (left, right) => {
    if (left >= right) return;
    let i = left;
    let j = right;
    const base = newArr[i];
    while (i < j) {
      while (i < j && newArr[j] > base) j--;
      newArr[i] = newArr[j];
      while (i < j && newArr[i] < base) i++;
      newArr[j] = newArr[i];
    }
    newArr[i] = base;
    deal(left, i - 1);
    deal(i + 1, right);
  }

  deal(0, arr.length - 1)
  return newArr;
}

const topK = (arr, num) => {
  const newArr = [...arr];
  let res;
  const deal = (left, right) => {
    if (left >= right) return;
    let i = left;
    let j = right;
    const base = newArr[i];
    while (i < j) {
      while (i < j && newArr[j] > base) j--;
      newArr[i] = newArr[j];
      while (i < j && newArr[i] < base) i++;
      newArr[j] = newArr[i];
    }
    newArr[i] = base;
    if (i === newArr.length - num) {
      res = newArr[i]
    } else if (i < newArr.length - num) {
      deal(i + 1, right);
    } else {
      deal(left, i - 1);
    }
  }

  deal(0, arr.length - 1)
  return res;
}

console.log(topK(arr, 3))
console.log(quickSort(arr))