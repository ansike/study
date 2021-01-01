export function broadcast(eventName, data) {
  this.$children.forEach((val) => {
    val.$emit(eventName, data);
    if (val.$children.length) {
      broadcast.call(val, eventName, data);
    }
  });
}
export function dispatch(eventName, data) {
  let parent = this.$parent;
  while (parent) {
    parent.$emit(eventName, data);
    parent = parent.$parent;
  }
}
