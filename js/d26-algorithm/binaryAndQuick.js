// 在无序数组中进行折半查找。

main();

function main() {
  let arr = [23, 1, 32, 11, 44, 65, 63];
  let a = binary(arr, 0, arr.length - 1, 32)
  console.log(a);
  console.log(arr);

}
function binary(arr, left, right, value) {
  if (left < right) {
    let mid = quick(arr, left, right);
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] > value) {
      return binary(arr, left, mid, value);
    } else {
      return binary(arr, mid + 1, right, value);
    }
  }
}
function quick(arr, left, right) {
  if (left < right) {
    let base = arr[left];
    while (left < right) {
      while (left < right && arr[right] > base) right--;
      arr[left] = arr[right];
      while (left < right && arr[left] < base) left++;
      arr[right] = arr[left];
    }
    arr[left] = base;
    return left;
  }
}