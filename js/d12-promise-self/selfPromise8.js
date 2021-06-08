/*
 * @Description: 异步任务的链式调用,then 参数可选, resolve和reject的静态调用
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-02 08:44:51
 * @LastEditTime: 2021-06-08 23:26:44
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
    const realFulFiled =
      typeof onFulfiled === "function" ? onFulfiled : (res) => res;
    const realRejected =
      typeof onRejected === "function"
        ? onRejected
        : (res) => {
            throw res;
          };

    const promise = new MyPromise((resolve, reject) => {
      const fullFiledFn = () => {
        queueMicrotask(() => {
          try {
            const x = realFulFiled(this.value);
            this.resolvePromise(promise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      const rejectedFn = () => {
        queueMicrotask(() => {
          try {
            const x = realRejected(this.reason);
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

  static resolve(arg) {
    return new MyPromise((resolve) => {
      resolve(arg);
    });
  }

  static reject(arg) {
    return new MyPromise((resolve, reject) => {
      reject(arg);
    });
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

MyPromise.resolve("resolve2")
  .then((res) => {
    console.log(res);
    throw 'throw1';
  })
  .then("", (err) => {
    console.log(err);
  });

MyPromise.reject("reject2")
  .then((res) => {
    console.log(res);
    throw 1;
  })
  .then("", (err) => {
    console.log(err);
  });

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
  .then((res) => {
    console.log("21");
    console.log(res);
  })
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
