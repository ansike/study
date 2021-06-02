/*
 * @Description: 同步promise
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-02 08:44:51
 * @LastEditTime: 2021-06-02 09:26:21
 */

const PROMISE_STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULLFILLED",
  REJECTED: "REJECTED",
};

class MyPromise {
  status = PROMISE_STATUS.PENDING;
  value = null;
  reason = null;
  constructor(executor) {
    executor(this.resolve2(), this.reject);
  }
  // 思考下为什么resolve和reject必须使用箭头函数,then不需要呢
  // resolve和reject是在executor中直接执行的没有直接调用方,默认指向window或者undefined,所以需要使用
  // 解决方案: 1.使用箭头函数透传this; 2.修改this指向
  resolve2() {
    const that = this;
    function fn(arg) {
      if (that.status === PROMISE_STATUS.PENDING) {
        that.value = arg;
        that.status = PROMISE_STATUS.FULFILLED;
      }
    }
    return fn;
  }
  resolve = (arg) => {
    if (this.status === PROMISE_STATUS.PENDING) {
      this.value = arg;
      this.status = PROMISE_STATUS.FULFILLED;
    }
  };
  reject = (arg) => {
    if (this.status === PROMISE_STATUS.PENDING) {
      this.reason = arg;
      this.status = PROMISE_STATUS.REJECTED;
    }
  };
  then = (onFulfiled, onRejected) => {
    if (this.status === PROMISE_STATUS.FULFILLED) {
      onFulfiled(this.value);
    } else if (this.status === PROMISE_STATUS.REJECTED) {
      onRejected(this.reason);
    }
  };
}

const promise = new MyPromise((resolve, reject) => {
  resolve("resolve");
  // reject("reject");
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
``;
