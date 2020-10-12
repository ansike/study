function debounce(func, wait, options) {
  let lastArgs,
    lastThis,
    maxWait,
    result,
    timeId,
    lastCallTime;

  let lastInvokeTime = 0;
  let maxing = false;
  let leading = false;
  let trailing = true;

  const useRAF = (!wait && wait !== 0 && typeof globalThis.requestAnimationFrame === "function");

  if (typeof func !== "function") {
    throw new TypeError("Excepted a function")
  }

  wait = +wait || 0;

  if (Object.prototype.toString.call(options) === "[object Object]") {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
  }

  function leadingEdge(time) {
    lastInvokeTime = time;
    timeId = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }

  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      global.cancelAnimationFrame(timeId);
      return global.requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait);
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    timeId = startTimer(timerExpired, remainingWait(time))
  }

  function trailingEdge(time) {
    timeId = undefined;
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    console.log("invoke", time - lastInvokeTime)
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  // function shouldInvoke(){}
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        timeId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timeId === undefined) {
      timeId = startTimer(timerExpired, wait);
    }
    return result;
  }
  function cancel() {
    if (timeId !== undefined) {
      clearTimer(timeId);
    }
    lastInvokeTime = 0;
    lastArgs = lastThis = lastCallTime = timeId = undefined;
  }
  function clearTimer(timeId) {
    if (useRAF) {
      return global.cancelAnimationFrame(timeId);
    }
    clearTimeout(timeId);
  }

  function flush() {
    return timeId === undefined ? result : trailingEdge(Date.now())
  }

  function pending() {
    return timeId !== undefined;
  }

  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending
  return debounced;
}
let fn = debounce(function (...arg) {
  console.log(500, this.name, arg);
}, 500, { leading: true, trailing: false })

let obj = {
  name: "obj",
  fn
}
let pre = Date.now()
obj.fn.flush()
setInterval(() => {
  console.log("1000")
  const now = Date.now();
  if (now - pre < 5000) {
    obj.fn(now);
  } else {
    obj.fn.cancel()
  }
}, 1000)