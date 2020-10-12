/**
 * 
 * @param {Function} func 
 * @param {Number} wait 
 * @param {Object} options 
 */
function debounce(func, wait, options) {
  wait = +wait || 0;
  let timer = null;
  let lastCallTime;
  let lastInvokeTime = 0;
  let maxWait;
  let args;
  let thisArg;
  let leading = false
  let maxing = false
  let result;
  let trailing = true
  let isUseRaf = (typeof global.requestAnimationFrame === "function");

  if (Object.prototype.toString.call(options) === ["object Object"]) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(wait, +options.maxWait || 0) : wait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }

  function invoke(time) {
    console.log("invoke", time - lastInvokeTime);
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    cancleTimer();
    return result;
  }

  function shouldInvoke(time) {
    let sinceLastCallTime = time - lastCallTime;
    let sinceLastInvokeTime = time - lastInvokeTime;
    // console.log("shouldInvoke", lastCallTime)
    return (lastCallTime === undefined || // 初始化调用
      sinceLastCallTime >= wait || // 距离上次调用超过了等待时间
      lastCallTime < 0 || // 系统时间倒退
      (maxing && sinceLastInvokeTime >= maxWait))// 距离上次执行超过了最大时间
    // 直接使用定时器会有不太准的情况，怎么优化，调用的时候直接重新生成新的定时器
  }

  function leadingEdge(time) {
    // console.log("leadingEdge", time, wait);
    lastInvokeTime = time;
    timer = startTimer(timerExpire, wait);
    return leading ? invoke(time) : result;
  }

  function trailingEdge(time) {
    // console.log("trailingEdge", time);
    if (trailing) {
      timer = null
      return invoke(time);
    }
    return result;
  }

  function timerExpire() {
    const time = Date.now()
    const isInvoke = shouldInvoke(time)
    // console.log("timerExpire", isInvoke)
    if (isInvoke) {
      return trailingEdge(time);
    }
    timer = startTimer(timerExpire, wait - lastCallTime)
  }

  function debounced(...arg) {
    const time = Date.now();
    const canInvoke = shouldInvoke(time)

    args = arg;
    thisArg = this;
    console.log("call", time - lastCallTime, canInvoke);
    lastCallTime = time;

    if (canInvoke) {
      if (timer === null) {
        leadingEdge(time);
      }
      if (maxing) {
        timer = startTimer(timerExpire, wait);
        return invoke(time);
      }
    }

    if (timer === null) {
      timer = startTimer(timerExpire, wait);
    }
  }

  function startTimer(pendingFn) {
    if (isUseRaf) {
      global.cancleAnimationFrame(timer);
      return global.requestAnimationFrame(pendingFn)
    }
    return setTimeout(pendingFn, wait)
  }

  function cancleTimer() {
    if (isUseRaf) {
      global.cancleAnimationFrame(timer);
    } else {
      clearTimeout(timer);
    }
    timer = null
  }
  return debounced;
}

function throttle(fn, wait, options) {
  return debounce(fn, wait, {
    maxing: wait,
    leading: options.leading,
    trailing: options.trailing
  })
}

// let fn = debounce(function (...arg) {
//   console.log(500, this.name, arg);
// }, 500, { leading: false, trailing: false })
let fn = throttle(function (...arg) {
  console.log(500, this.name, arg);
}, 500, { leading: false, trailing: true })

let obj = {
  name: "obj",
  fn
}

// setInterval(() => {
//   const now = Date.now();
//   obj.fn(now);
// }, 1000)
setInterval(() => {
  obj.fn();
}, 300)