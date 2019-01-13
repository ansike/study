//---------------------快排
// 基本思想:
// 1.选择一个基准值,把左边位置空出来,一般是第一个数(思路最简单),也可以换其他数.
// 2.从右往左选取比基准值小的数,放入左边空位,把右边位置空出来
// 3.从左边第二个数开始选取比基准值大的数,放入右边空位,把左边位置空出来
// 4.依次进行左边的下标等于右边的下标

main();

function main() {
  let arr = [15,64,2,34,8,9,23,55];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
}
function quickSort(arr, left, right) {
  if(left < right){
    let templ = left;
    let tempr = right;
    let base = arr[left];
    while(left < right){
      while (left < right && arr[right] > base) right--;
      arr[left] = arr[right];
      while (left < right && arr[left] <= base) left++;
      arr[right] = arr[left];
    }
    // console.log(left, right);
    arr[left] = base;
    quickSort(arr, templ, left);
    quickSort(arr, left + 1, tempr);
  }
}