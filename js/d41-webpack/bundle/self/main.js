(function (modules) {
  let installedModules = {};
  var installedChunks = {
    main: 0
  };
  // 注册加载完毕的回调事件
  function webpackJsonpCallback(data) {
    let resolves = [];
    for (let key in data) {
      modules[key] = data[key];
      resolves.push(installedChunks[key][0]);
    }
    while (resolves.length) {
      resolves.shift()();
    }
  }

  // 加载在当前modules对象中的数据
  function self_require(moduleId) {
    var module = {
      exports: {}
    };
    modules[moduleId].call(module.exports, module, self_require);
    return module.exports;
  }

  // 加载分包资源,使用jsonp的形式
  self_require.e = function (moduleId) {
    let promises = [];

    let promise = new Promise((resolve, reject) => {
      installedChunks[moduleId] = [resolve, reject];
    });

    promises.push(promise);

    var script = document.createElement("script");
    script.src = moduleId;
    document.head.appendChild(script);

    return Promise.all(promises);
  };

  // 改写当前数组的加载方式
  let jsonpArray = (window["jsonp"] = []);
  jsonpArray.push = webpackJsonpCallback;

  // 入口文件编写
  return self_require("./main.js");
})({
  "./main.js": function (module, self_require) {
    const b = self_require("./b.js");
    const btn = document.createElement('button');
    btn.innerText = "加载A"
    btn.onclick = () => {
      console.log("load A");
      self_require
        .e("./a.js")
        .then(() => self_require("./a.js"))
        .then(res => {
          console.log("a", res.a);
        });
    }
    document.body.appendChild(btn);
    console.log("b", b.b);
  },
  "./b.js": function (module, self_require) {
    console.log("b.js");
    self_require
      .e("./c.js")
      .then(() => self_require("./c.js"))
      .then(res => {
        console.log("c", res.c);
      });
    module.exports = {
      b: 1
    };
  }
});
