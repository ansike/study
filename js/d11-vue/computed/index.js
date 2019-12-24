/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-30 22:51:24
 * @LastEditTime: 2019-12-19 22:42:13
 */

class Dep {
  // static target;
  // collections: array;
  constructor(key) {
    this.key = key;
    this.collections = [];
  }
  add(watcher) {
    this.collections.push(watcher);
  }
  notify() {
    this.collections && this.collections.forEach(it => it.update());
  }
}
Dep.target = null;
const targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

class Watcher {
  constructor(vm, key, getter) {
    this.vm = vm;
    this.dep = new Dep();
    this.getter = getter;
    this.key = key;
    this.get();
  }
  get() {
    pushTarget(this);
    console.log("watcher");
    this.getter.call(this.vm);
    console.log("watcher-call");
    popTarget();
  }
  update() {
    this.getter.call(this.vm);
  }
  evaluate() {}
}

class A {
  // __watcher: object;
  constructor(data, computed) {
    this.__watcher = {};
    // data = Object.assign({}, data, computed);
    this.data = data;
    this.dealData(data);
    data.computedC = computed.computedC;
    this.computed = computed;
    setInterval(() => {
      this.data.a++;
    }, 1000);
    this.dealComputed(computed);
  }
  dealData(data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        this.defineReactive(data, key, data[key]);
      }
    }
  }
  dealComputed(computed) {
    for (let key in computed) {
      this.__watcher[key] = new Watcher(this.data, key, this.data[key]);

      // definePrototype(data, key, data[key]);
    }
  }
  defineReactive(data, key, val) {
    if (key === "computedC") return;
    let dep = new Dep(key);
    Object.defineProperty(data, key, {
      get() {
        // 收集依赖
        if (Dep.target && !dep.collections.includes(Dep.target)) {
          dep.add(Dep.target);
        }
        return val;
      },
      set(newval) {
        // notify 执行通知
        console.log("set", newval);
        val = newval;
        if (dep) {
          dep.notify();
        }
      }
    });
  }
}
let options = {};
let data = {
  a: 1,
  b: 2
};
let computed = {
  computedC() {
    console.log("computedC", data.a + data.b);
    return data.a + data.b;
  }
};
let a = new A(data, computed);

// console.log(options.computed.computedC());
