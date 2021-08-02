/*
 * @Description: 符合promise A+规范
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-06-02 08:44:51
 * @LastEditTime: 2021-06-09 00:14:09
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

  // resolve 静态方法
  static resolve(parameter) {
    // 如果传入 MyPromise 就直接返回
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    // 转成常规方式
    return new MyPromise((resolve) => {
      resolve(parameter);
    });
  }

  static reject(arg) {
    return new MyPromise((resolve, reject) => {
      reject(arg);
    });
  }

  resolvePromise(promise, x, resolve, reject) {
    // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
    // 这是为了防止死循环
    if (promise === x) {
      return reject(
        new TypeError("The promise and the return value are the same")
      );
    }

    if (typeof x === "object" || typeof x === "function") {
      // 这个坑是跑测试的时候发现的，如果x是null，应该直接resolve
      if (x === null) {
        return resolve(x);
      }

      let then;
      try {
        // 把 x.then 赋值给 then
        then = x.then;
      } catch (error) {
        // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
        return reject(error);
      }

      // 如果 then 是函数
      if (typeof then === "function") {
        let called = false;
        // 将 x 作为函数的作用域 this 调用之
        // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
        // 名字重名了，我直接用匿名函数了
        try {
          then.call(
            x,
            // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
            (y) => {
              // 如果 resolvePromise 和 rejectPromise 均被调用，
              // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
              // 实现这条需要前面加一个变量called
              if (called) return;
              called = true;
              resolvePromise(promise, y, resolve, reject);
            },
            // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } catch (error) {
          // 如果调用 then 方法抛出了异常 e：
          // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
          if (called) return;

          // 否则以 e 为据因拒绝 promise
          reject(error);
        }
      } else {
        // 如果 then 不是函数，以 x 为参数执行 promise
        resolve(x);
      }
    } else {
      // 如果 x 不为对象或者函数，以 x 为参数执行 promise
      resolve(x);
    }
  }
}

MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
};
module.exports = MyPromise;
