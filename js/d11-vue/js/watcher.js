function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();  // 
}

Watcher.prototype = {
    get: function() {
        Dep.target = this;  // 将当前观察者绑定到全局对象上
        var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数，将当前观察者添加到订阅器的操作
        Dep.target = null;  // 释放全局对象
        return value;
    },
    update: function() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
};
