export default class Bus {
  constructor() {
    this.callbacks = {};
  }

  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }

  $emit(name, data) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach((cb) => {
        cb(data);
      });
    } else {
      console.log(`请先注册${name}方法,再使用`);
    }
  }

  $off(name, fn) {
    this.callbacks[name] = this.callbacks[name].filter(val => val !== fn);
  }
}
