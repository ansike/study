/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-30 22:51:24
 * @LastEditTime: 2019-12-19 23:54:24
 */
 
/**
 * @Description: 订阅器,添加Watcher,通知Watcher更新, 是Observe和Watcher之间的桥梁
 */
class Dep {
  constructor() {
    this.deps = [];
  }
  add(watch) {
    this.deps.push(watch);
  }
  notify() {
    this.deps.forEach(item => item.update());
  }
}
Dep.target = null;
/**
 * @Description: Watcher,通过执行fun,出发get方法收集依赖,将当前的Watcher放到每一个被Observe的属性订阅器中
 */
class Watcher {
  constructor(vm, key, fn) {
    this.vm = vm;
    this.fn = fn;
    this.deal();
  }
  deal() {
    Dep.target = this;
    this.fn.call(this.vm);
    Dep.target = null;
  }
  update() {
    this.fn.call(this.vm);
  }
}
class A {
  constructor(obj) {
    this.__watcher = {};
    this.data = obj.data;
    this.computed = obj.computed;

    this.dealData(this.data);
    this.dealComputed(this.computed);
  }
  dealData(data) {
    for (let key in data) {
      this.defineReactive(data, key, data[key]);
    }
  }
  dealComputed(computed) {
    for (let key in computed) {
      // console.log(computed, key, computed[key]);
      this.__watcher[key] = new Watcher(this, key, computed[key]);
    }
  }
  defineReactive(data, key, val) {
    let dep = new Dep();
    Object.defineProperty(data, key, {
      get() {
        if (Dep.target) {
          dep.add(Dep.target);
        }
        return val;
      },
      set(newVal) {
        if (dep.deps.length) {
          dep.notify();
        }
        val = newVal;
      }
    });
  }
}

const testObj = {
  data: {
    a: 1,
    b: 2
  },
  computed: {
    computedC() {
      let res = this.data.a + this.data.b;
      console.log("computedC", res);
      return res;
    }
  }
};

let test = new A(testObj);
setInterval(() => {
  test.data.a++;
}, 1000);
