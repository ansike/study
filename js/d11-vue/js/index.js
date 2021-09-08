/**
 * 绑定主要使用的是：Object.defineProperty
 * 数据劫持：get和set
 * 
 * @param {*} options 
 */

function SelfVue(options) {
  var self = this;
  this.data = options.data;
  this.methods = options.methods;
  //将data上的所有属性代理到this上
  Object.keys(this.data).forEach(function (key) {
    self.proxyKeys(key);
  });
  //-----------------------beforeCreate
  //劫持数据
  observe(this.data);
  //处理dom。绑定事件。挂载dom
  new Compile(options.el, this);

  options.mounted.call(this); // 所有事情处理好后执行mounted函数
}

SelfVue.prototype = {
  proxyKeys: function (key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return self.data[key];
      },
      set: function setter(newVal) {
        self.data[key] = newVal;
      }
    });
  }
}