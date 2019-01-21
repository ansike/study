main(1348);
function main(N) {
  let arr = [];
  while(N){
    arr.push(N%8);
    N = Math.floor(N / 8);
  }
  console.log(arr.reverse().join(''));
}