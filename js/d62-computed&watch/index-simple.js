class Dep {}
Dep.target = null;
function pushTarget(watcher) {
  Dep.target = watcher;
}
function popTarget() {
  Dep.target = null;
}
class Watcher {
  constructor(vm, getter) {
    this.vm = vm;
    this.getter = getter;
    this.value = this.get();
  }
  get() {
    pushTarget(this);
    const val = this.getter.call(this.vm);
    popTarget();
    return val;
  }
  update() {
    this.value = this.get();
  }
}
class Vue {
  constructor({ data, computed }) {
    this.initData(data);
    this.initComputed(computed);
  }
  initData(data) {
    Object.keys(data).forEach((key) => {
      this.defineReactive(key, data[key]);
    });
  }
  initComputed(computed) {
    for (const key in computed) {
      const userDef = computed[key];
      const watcher = new Watcher(this, userDef);
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return watcher.value;
        },
        set() {},
      });
    }
  }
  defineReactive(key, val) {
    const deps = [];
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          deps.push(Dep.target);
        }
        console.log("get", key, val);
        return val;
      },
      set(newVla) {
        if (val === newVla) return;
        val = newVla;
        console.log("set", key, val);
        deps.forEach((item) => {
          item.update();
        });
      },
    });
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

console.log("fullName: ", vue.fullName);
console.log("firstName: ", vue.firstName);
console.log("lastName: ", vue.lastName);
// 前两行的打印是computed首次计算fullName造成的打印
// get firstName first
// get lastName last
// 直接当前computed的watcher中获取值
// fullName:  first-last
// 获取firstName时的打印
// get firstName first
// firstName:  first
// 获取lastName时的打印
// get lastName last
// lastName:  last

console.log("===========================分割线============================");
vue.firstName = "changed first";
console.log("firstName: ", vue.firstName);
console.log("fullName: ", vue.fullName);
// 设置firstName时的打印
// set firstName changed first
// 设置完firstName之后触发了notify,重新计算computed值
// get firstName changed first
// get lastName last
// 获取firstName
// get firstName changed first
// firstName:  changed first
// 获取fullName
// fullName:  changed first-last
