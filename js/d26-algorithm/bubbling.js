// 冒泡排序
main()

function main() {
  let arr = [4,3,2,6,45,23];
  console.time("bubble")
  console.log(bubbling(arr));
  console.timeEnd("bubble")
  
}

function bubbling(arr) {
  let temp;
  let k = arr.length;
  let pos = 0; // 记录最后一次的交换位置
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < k; j++) {
      if(arr[i] > arr[j]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        pos = j;
      }
    }
    k = pos;
  }
  return arr;
}

// 未优化前的bubble
// function bubbling(arr) {
//   let temp;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if(arr[i] > arr[j]){
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }

// 交换两个值
let a = 1;
let b=2;
a = a-b;
b = a+b;
a = b-a;
console.log(a)
console.log(b)
