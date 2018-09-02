function SelfVue (options) {
    var self = this;
    this.data = options.data;
    this.methods = options.methods;
    //将data上的所有属性代理到this上
    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key);
    });
    
    observe(this.data);
    new Compile(options.el, this);
    debugger
    options.mounted.call(this); // 所有事情处理好后执行mounted函数
}

SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function getter () {
                return self.data[key];
            },
            set: function setter (newVal) {
                self.data[key] = newVal;
            }
        });
    }
}
