/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-05 15:35:30
 * @LastEditTime: 2019-10-05 19:49:21
 */
const fs = require('fs');
// { start: 0, end: 99 }
// const stream = fs.createReadStream('./1.json', {
//   encoding: 'utf-8',
//   // start: 0,
//   // end: 1024
//   highWaterMark: 1024000
// });
// let index = 1;
// let tempString = '';

// stream.on('open', res => {
//   console.log('open', res);
// });

// stream.on('data', res => {
//   let stream = fs.createWriteStream(`./data/deal-${index}.json`);
//   res = res.replace(/\s/g, '');
//   let matched = res.match(/(.*)},(.*)/)[2];
//   console.log(matched);
//   // 判断有没有上一部分的数据残留
//   if (tempString) {
//     res = '[' + tempString + res;
//     tempString = '';
//   }
//   // 判断当前数据有没有被截断,截断的话,截断部分放到下边的json中
//   if (matched) {
//     let lastCode = matched.charAt(matched.length - 1);
//     if (lastCode !== ']' && lastCode !== '}') {
//       tempString = matched;
//     }
//   }

//   res = res.substring(0, res.length - tempString.length - 1);
//   if (res.charAt(0) !== '[') {
//     res = '[' + res;
//   }
//   if (res.charAt(res.length - 1) !== ']') {
//     res += ']';
//   }

//   let flag = stream.write(res);
//   console.log(flag, res);
//   index++;
// });

// stream.on('end', res => {
//   console.log('end', res);
// });

for (let index = 1; index <= 23; index++) {
  let data = require(`./data/deal-${index}.json`);
  console.log('=======', index);
  console.log(data[0]);
  console.log(data[data.length - 1]);
}
