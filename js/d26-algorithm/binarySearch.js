//一般二分法,找数 O(logN)
// 1.前提是有序的列表
// 2.折半
let arr = [1, 2, 3, 4, 5, 6, 7, 12, 23, 45, 66];

main(arr, 12);//7

function main(arr, val) {
  console.log(findIndex(arr, val));
}

function findIndex(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] == val){
      return mid;
    } else if (val < arr[mid]){
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }
  return -1;
}