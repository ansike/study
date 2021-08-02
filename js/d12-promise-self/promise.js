/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-08 23:04:10
 * @LastEditTime: 2021-06-08 23:05:27
 */

Promise.resolve()
  .then((res) => {
    throw 1;
  })
  .then(
    (res) => {
      console.log("then1", res);
    },
    (err) => {
      console.log("err1", err);
    }
  )
  .then(
    (res) => {
      console.log("then2", res);
    },
    (err) => {
      console.log("err2", err);
    }
  );;
