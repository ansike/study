/*
 * @Description: 异步promise,多次then调用
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-02 08:44:51
 * @LastEditTime: 2021-06-02 09:32:17
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

  onFulFiledCallbacks = [];
  onRejectedCallbacks = [];
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  resolve = (arg) => {
    if (this.status === PROMISE_STATUS.PENDING) {
      this.value = arg;
      this.status = PROMISE_STATUS.FULFILLED;
      while (this.onFulFiledCallbacks.length) {
        const cb = this.onFulFiledCallbacks.shift();
        cb && cb(arg);
      }
    }
  };
  reject = (arg) => {
    if (this.status === PROMISE_STATUS.PENDING) {
      this.reason = arg;
      this.status = PROMISE_STATUS.REJECTED;
      while (this.onRejectedCallbacks.length) {
        const cb = this.onRejectedCallbacks.shift();
        cb && cb(arg);
      }
    }
  };
  then(onFulfiled, onRejected) {
    if (this.status === PROMISE_STATUS.FULFILLED) {
      onFulfiled(this.value);
    } else if (this.status === PROMISE_STATUS.REJECTED) {
      onFulfiled(this.reason);
    } else if (this.status === PROMISE_STATUS.PENDING) {
      this.onFulFiledCallbacks.push(onFulfiled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve("resolve");
    reject("reject");
  }, 100);
});

promise.then(
  (res) => {
    console.log("1");
    console.log(res);
  },
  (err) => {
    console.log("1");
    console.log(err);
  }
);

promise.then(
  (res) => {
    console.log("2");
    console.log(res);
  },
  (err) => {
    console.log("2");
    console.log(err);
  }
);

promise.then(
  (res) => {
    console.log("3");
    console.log(res);
  },
  (err) => {
    console.log("3");
    console.log(err);
  }
);
