/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-05 15:35:30
 * @LastEditTime: 2019-10-05 16:39:26
 */
const fs = require('fs');

const stream = fs.createReadStream('./aaa.json', { start: 0, end: 99 });
stream.open(res => {
  console.log('open', res);
});

stream.on('open', res => {
  console.log('open', res);
});

stream.on('data', res => {
  console.log(res);
  console.log(res.toString());
});

stream.on('end', res => {
  console.log('end', res);
});
