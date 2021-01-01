/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-03-06 09:14:40
 * @LastEditTime: 2019-08-31 01:04:55
 */
function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk: function(data) {
        var self = this;
        Object.keys(data).forEach(function(key) {
            self.defineReactive(data, key, data[key]);
        });
    },
    defineReactive: function(data, key, val) {
        var dep = new Dep();
        // var childObj = observe(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function getter () {
                //只有new Watcher()的时候才会往订阅数组中插入观察者
                if (Dep.target) {
                    dep.addSub(Dep.target);
                }
                return val;
            },
            set: function setter (newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                //改变值的时候会通知所有订阅数组中的观察者进行更新操作
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    //传入的value必须是对象形式
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
};

function Dep() {
  this.subs = [];
}
Dep.prototype = {
    //添加新的订阅者
    addSub: function(sub) {
        this.subs.push(sub);
    },
    //通知所有的观察者进行更新操作
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};
Dep.target = null;
