
function main(N) {
  let arr = [];
  while(N){
    arr.push(N%8);
    N = Math.floor(N / 8);
  }
  return arr.reverse().join('');
}
console.log(main(1348));