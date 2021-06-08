/*
 * @Description: executor, then错误捕获
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-02 08:44:51
 * @LastEditTime: 2021-06-04 09:24:57
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
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
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
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS.FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulfiled(this.value);
            if (x === promise) {
              return reject(
                new TypeError("Chaining cycle detected for promise #<Promise>")
              );
            }
            if (x instanceof MyPromise) {
              x.then(resolve, reject);
            } else {
              resolve(x);
            }
          } catch (error) {
            reject("then 运行错误", error);
          }
        });
      } else if (this.status === PROMISE_STATUS.REJECTED) {
        onRejected(this.reason);
      } else if (this.status === PROMISE_STATUS.PENDING) {
        this.onFulFiledCallbacks.push(onFulfiled);
        this.onRejectedCallbacks.push(onRejected);
      }
    });
    return promise;
  }
}

const promise = new MyPromise((resolve, reject) => {
  // throw "主动报错";
  resolve("resolve");
});
const other = () => {
  return new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    resolve("resolve");
    // }, 100);
  });
};

const p1 = promise
  .then(
    (res) => {
      console.log("2");
      console.log(res);
      // return new Error("then 出错");
    },
    (err) => {
      console.log("2");
      console.log(err);
    }
  )
  .then(
    (res) => {
      console.log("21");
      console.log(res);
    },
    (err) => {
      console.log("21");
      console.log(err);
    }
  )
  .then(
    (res) => {
      console.log("22");
      console.log(res);
    },
    (err) => {
      console.log("22");
      console.log(err);
    }
  );
