(function(modules) {
  var chucks = {};
  function self_require(moduleId) {
    let module = {
      exports: {}
    };
    modules[moduleId].call(module.exports, module, self_require);
    return module.exports;
  }
  self_require.e = function(moduleId) {
    let promises = [];

    promises.push(
      new Promise((resolve, reject) => {
        chucks[moduleId] = [resolve, reject];
      })
    );
    let script = document.createElement("script");
    script.src = moduleId;
    document.head.append(script);

    return Promise.all(promises);
  };
  function webpackJsonp(data) {
    let resolves = [];
    for(let key in data){
      modules[key] = data[key];
      resolves.push(chucks[key][0]);
    }

    while(resolves.length){
      resolves.shift()()
    }
  }
  window['jsonp'] = [];
  window["jsonp"].push = webpackJsonp;

  // 入口文件编写
  return self_require("./main.js");
})({
  "./main.js": function(module, self_require) {
    const b = self_require("./b.js");
    self_require
      .e("./a.js")
      .then(() => self_require("./a.js"))
      .then(res => {
        console.log("a", res.a);
      });
    console.log("b", b.b);
    console.log("main");
  },
  "./b.js": function(module, self_require) {
    console.log("b.js");
    module.exports = {
      b: 1
    };
  }
});
