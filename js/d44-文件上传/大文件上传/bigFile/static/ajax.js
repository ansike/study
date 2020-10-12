/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-09 16:29:44
 * @LastEditTime : 2020-01-09 22:22:25
 */
function ajax(options) {
  let {
    method = "GET",
    url = "",
    type = true,
    data,
    needQs = true,
    headers = {
      // "Content-Type": "application/x-www-form-urlencoded"
    }
  } = options;
  if (url === "") throw new Error("url 不能为空~");
  return new Promise((resolve, reject) => {
    let body = data;
    method = method.toUpperCase();
    if (method === "GET") {
      url += "?" + sequenceData(data);
    } else if (method === "POST") {
      if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
        body = sequenceData(data);
      }
    }

    const xhr = new XMLHttpRequest();

    xhr.open(method, url, type);
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.onload = res => {
      console.log("onload");
      resolve(res);
    };
    xhr.send(body);
  });
}

// 序列化get请求
function getSequenceData(data) {
  let str = "";
  for (let key in data) {
    str += key + "=" + data[key] + "&";
  }
  return str.slice(0, -1);
}
