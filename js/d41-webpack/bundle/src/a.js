console.log("a.js");

// 得是全局的函数名
let deal;
function jsonp(src) {
  return new Promise((resolve, reject) => {
    new Promise(resolveChild => {
      deal = function(data) {
        console.log("deal函数执行", data);
        resolveChild("deal" + data);
      };
    }).then(res => {
      console.log("通知jsonp函数执行", res);
      resolve(1);
    });

    // 假装生成一个script标签
    let script = {};
    script.src = src + "?callback=deal";
    // - append到head上

    // 模拟deal函数callback回调,deal函数直接执行,不参杂任何动作
    setTimeout(() => {
      console.log("参数为:" + script.src + ", callback回调执行");
      deal(src);
    }, 1000);
  });
}
jsonp("http://111").then(arg => {
  console.log("jsonp函数执行后续动作1", arg);
  console.log("===============");
});
setTimeout(() => {
  jsonp("http://222").then(arg => {
    console.log("jsonp函数执行后续动作2", arg);
  });
}, 1000);

export default {
  a: 1
};
