/*
 * @Description: 观察者模式-依赖发布订阅实现的
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-17 11:01:42
 * @LastEditTime: 2019-08-17 17:18:43
 */
// 被观察者
// 被观察者中有一个订阅发布
class Subject {
  constructor() {
    this.state = "开心";
    this.arr = [];
  }
  // 注册订阅者
  attach(fn) {
    this.arr.push(fn);
  }
  // 被观察着发生变化的时候出发观察者的时间通知观察者
  setSTate(state) {
    this.state = state;
    this.arr.forEach(element => {
      element.update(state);
    });
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update(state) {
    console.log(this.name + "小宝宝:" + state);
  }
}

let s = new Subject("小宝宝");
let watcher1 = new Observer("我媳妇儿");
let watcher2 = new Observer("我");

// 注册观察者
s.attach(watcher1);
s.attach(watcher2);
// 被观察者发生变化
s.setSTate("不开心");

