(function () {
  // 1.label+continue
  let num = 0;
  outermost:
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if(i == 5 && j == 5){
        continue outermost;
      }
      num++;
    }
  }
  console.log(num);//95  直接跳过i=5后j=5,6,7,8,9的五种情况

  // 2.break
  let num3 = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
          break;
        }
        num3++;
      }
    }
  console.log(num3); //95  直接跳过i=5后j=5,6,7,8,9的五种情况

  // 3.label+break
  // label语句可以直接跳出很深的循环
  let num2 = 0;
  outermost2:
    for (let k = 0; k < 10; k++) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (k == 5 && i == 5 && j == 5) {
            break outermost2;
          }
          num2++;
        }
      }
    }
  console.log(num2); //555  直接退出k=5,i=5,j=5后的所有情况
})();