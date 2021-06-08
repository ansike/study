/*
 * @Description: 异步任务的链式调用
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-02 08:44:51
 * @LastEditTime: 2021-06-08 23:12:16
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
      const fullFiledFn = () => {
        queueMicrotask(() => {
          try {
            const x = onFulfiled(this.value);
            this.resolvePromise(promise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      const rejectedFn = () => {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            this.resolvePromise(promise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      if (this.status === PROMISE_STATUS.FULFILLED) {
        fullFiledFn();
      } else if (this.status === PROMISE_STATUS.REJECTED) {
        rejectedFn();
      } else if (this.status === PROMISE_STATUS.PENDING) {
        this.onFulFiledCallbacks.push(fullFiledFn);
        this.onRejectedCallbacks.push(rejectedFn);
      }
    });
    return promise;
  }

  resolvePromise(promise, x, resolve, reject) {
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
  }
}

const promise = new MyPromise((resolve, reject) => {
  // throw "主动报错";
  setTimeout(() => {
    resolve("resolve");
  }, 100);
});
const other = () => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve");
    }, 100);
  });
};

const p1 = promise
  .then(
    (res) => {
      console.log("2");
      console.log(res);
      throw new Error("then 出错");
    },
    (err) => {
      console.log("2e");
      console.log(err);
    }
  )
  .then(
    (res) => {
      console.log("21");
      console.log(res);
    },
    (err) => {
      console.log("21e");
      console.log(err);
      return other();
    }
  )
  .then(
    (res) => {
      console.log("22");
      console.log(res);
    },
    (err) => {
      console.log("22e");
      console.log(err);
    }
  );
