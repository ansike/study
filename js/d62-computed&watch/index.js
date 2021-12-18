function noop() {}
// 一个可观察对象,可以收集多个watcher注入到其中,在将其注入到真实的watcher中
// 依赖收集类
class Dep {
  static target = null;
  subs = [];
  constructor() {}
  addSub(watcher) {
    this.subs.push(watcher);
  }
  removeSub(watcher) {
    const index = this.subs.indexOf((item) => item === watcher);
    if (index >= 0) this.subs.splice(index, 1);
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }
  notify() {
    this.subs.forEach((item) => {
      item.update();
    });
  }
}
Dep.target = null;
const targetStack = [];
function pushTarget(watcher) {
  targetStack.push(watcher);
  Dep.target = watcher;
}
function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

// 观察者类
class Observer {
  static observe(value, flag) {
    return new Observer(value);
  }
  constructor(value) {
    this.value = value;
    this.dep = new Dep();
    this.walk(value);
  }
  walk(data) {
    const keys = Object.keys(data);
    let len = keys.length;
    while (len--) {
      const key = keys[len];
      this.defineReactive(data, key);
    }
  }
  defineReactive(obj, key) {
    const dep = new Dep();
    let val = obj[key];
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        console.log("get", key, val);
        return val;
      },
      set(newVla) {
        if (val === newVla) return;
        val = newVla;
        console.log("set", key, val);
        dep.notify();
      },
    });
  }
}

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop,
};

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.cb = cb;
    // this.options = options;
    this.lazy = true;
    // 先不考虑非fn
    this.getter = expOrFn;
    this.value = this.get();
  }
  get() {
    pushTarget(this);
    const vm = this.vm;
    const val = this.getter.call(this.vm);
    popTarget();
    return val;
  }
  update() {
    this.value = this.get();
  }
  evaluate() {
    this.value = this.get();
    this.dirty = false;
  }
}

class Vue {
  constructor({ data, computed }) {
    this._data = data;
    this.initData(data);
    this.initComputed(computed);
  }
  proxy(target, source, key) {
    Object.defineProperty(target, key, {
      enumerable: true,
      figurable: true,
      get() {
        return target[source][key];
      },
      set(val) {
        target[source][key] = val;
      },
    });
  }
  initData(data) {
    // 将data属性挂载到this上
    Object.keys(data).forEach((key) => {
      this.proxy(this, "_data", key);
    });
    // 添加观察者
    Observer.observe(data);
  }
  initComputed(computed) {
    // const shouldCache = true;
    const watchers = (this._computedWatchers = Object.create(null));
    for (const key in computed) {
      const userDef = computed[key];
      watchers[key] = new Watcher(this, userDef, noop);
      this.defineComputed(this, key, userDef);
    }
  }
  defineComputed(target, key, userDef) {
    // if (typeof userDef === "function")
    sharedPropertyDefinition.get = this.createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }
  createComputedGetter(key) {
    return function computed(params) {
      const watcher = this._computedWatchers[key];
      if (watcher) {
        return watcher.value;
      }
    };
  }
}

const vue = new Vue({
  data: {
    firstName: "first",
    lastName: "last",
  },
  computed: {
    fullName() {
      return this.firstName + "-" + this.lastName;
    },
  },
});

console.log(vue.fullName);
console.log(vue.firstName);
console.log(vue.lastName);
// 前两行的打印是computed首次计算fullName造成的打印
// get firstName first
// get lastName last
// 直接当前computed的watcher中获取值
// first-last
// 获取firstName时的打印
// get firstName first
// first
// 获取lastName时的打印
// get lastName last
// last
console.log('===========================分割线============================');
vue.firstName = 'changed first';
console.log(vue.firstName);
console.log(vue.fullName);
// 设置firstName时的打印
// set firstName changed first
// 设置完firstName之后触发了notify,重新计算computed值
// get firstName changed first
// get lastName last
// 获取firstName
// get firstName changed first
// changed first
// 获取fullName
// changed first-last