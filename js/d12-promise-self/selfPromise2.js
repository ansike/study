/*
 * @Description: 异步promise
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-02 08:44:51
 * @LastEditTime: 2021-06-02 09:25:41
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
  fulFiledFn = null;
  rejectedFn = null;
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  resolve = (arg) => {
    if (this.status === PROMISE_STATUS.PENDING) {
      this.value = arg;
      this.status = PROMISE_STATUS.FULFILLED;
      this.fulFiledFn && this.fulFiledFn(arg);
    }
  };
  reject = (arg) => {
    if (this.status === PROMISE_STATUS.PENDING) {
      this.reason = arg;
      this.status = PROMISE_STATUS.REJECTED;
      this.rejectedFn && this.rejectedFn(arg);
    }
  };
  then(onFulfiled, onRejected) {
    if (this.status === PROMISE_STATUS.FULFILLED) {
      onFulfiled(this.value);
    } else if (this.status === PROMISE_STATUS.REJECTED) {
      onFulfiled(this.reason);
    } else if (this.status === PROMISE_STATUS.PENDING) {
      this.fulFiledFn = onFulfiled;
      this.rejectedFn = onRejected;
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
    // reject("reject");
  }, 100);
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
