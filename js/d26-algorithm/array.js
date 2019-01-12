// 长度为n的数组中，总是存在一个断点（下标记为i），数组中断点前面的数字是有序的，
// 断点后的数字也是有序的，且断点后边的数字总是小于前面的数字。如果直接把断点后边的数字移动到数组的前边，
// 那么这个数组将是有序的，具体描述如下所示。求这个数组中的第n / 2大的数。

//分析:先或者断点的下标,n/2的数字,两者之间的联系
main();

function main() {
  let array = [5, 6, 7, 1, 2, 3, 4];
  // let array = [
  //   6, 8, 10, 13, 1, 2, 4
  // ];
  //断点下标
  let n = array.length;
  let splitIndex = findSplitIndex(array);//4
  let location = Math.ceil(n / 2);//4
  let temp;
  //断点下标和n/2的位置的关系
  if (splitIndex - location >= 0) {
    //n/2在断点左边
    temp = array[splitIndex - location];
  }else{
    //n/2在断点右边
    temp = array[n + (splitIndex - location)];
  }
  console.log(temp);
}

function findSplitIndex(val) {
  for (let index = 0; index < val.length; index++) {
    if(val[index] > val[index + 1]){
      return index + 1;
    }
  }
  return 0;
}