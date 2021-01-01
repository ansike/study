function debounce(func, wait, options) {
  let lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime

  let lastInvokeTime = 0
  let leading = false
  let maxing = false
  let trailing = true

  // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
  const useRAF = (!wait && wait !== 0 && typeof global.requestAnimationFrame === 'function')

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  // 容错处理
  wait = +wait || 0
  if (Object.prototype.toString.call(options) === "[object Object]") {
    // 因为leading默认为false，此处即使没有传参的情况下也能达到默认条件
    leading = !!options.leading
    maxing = 'maxWait' in options
    // 在maxwait和wait中选取一个最大值作为最大等待时间参数，容错处理
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
    // 此处和leading的写法不一致的原因是trailing的默认值是true
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  // 调用函数
  function invokeFunc(time) {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }
  // 设置定时器或者raf
  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      global.cancelAnimationFrame(timerId)
      return global.requestAnimationFrame(pendingFunc)
    }
    return setTimeout(pendingFunc, wait)
  }
  // 取消定时器或者raf
  function cancelTimer(id) {
    if (useRAF) {
      return global.cancelAnimationFrame(id)
    }
    clearTimeout(id)
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time
    // Start the timer for the trailing edge.
    timerId = startTimer(timerExpired, wait)
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting
  }

  function shouldInvoked(time) {
    // 距离上次调用时间
    const timeSinceLastCall = time - lastCallTime
    // 距离上次执行的时间
    const timeSinceLastInvoke = time - lastInvokeTime

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    // lastCallTime为undefined的时候即为第一次执行
    console.log("shouldInvoked", timeSinceLastCall, wait)
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
  }

  function timerExpired() {
    const time = Date.now()
    if (shouldInvoked(time)) {
      return trailingEdge(time)
    }
    // Restart the timer.
    timerId = startTimer(timerExpired, remainingWait(time))
  }

  function trailingEdge(time) {
    timerId = undefined

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

  function cancel() {
    if (timerId !== undefined) {
      cancelTimer(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())
  }

  function pending() {
    return timerId !== undefined
  }

  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvoked(time)

    lastArgs = args
    lastThis = this
    lastCallTime = time

    console.log(100, isInvoking, wait, timerId === undefined);
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)
    }
    return result
  }
  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending
  return debounced
}

let fn = debounce(function (...arg) {
  console.log(500, this.name, arg);
}, 500, { leading: false })

let obj = {
  name: "obj",
  fn
}
setInterval(() => {
  const now = Date.now();
  obj.fn(now);
}, 1000)