class DeepClone {
  constructor() {}
  deal(obj) {
    if (obj == null) return null;
    if (obj instanceof Date) {
      let copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    if (obj instanceof Array) {
      let copy = [];
      for (let index = 0; index < obj.length; index++) {
        // 注意此处的deal
        copy[index] = this.deal(obj[index]);
      }
      return copy;
    }

    if (obj instanceof Object) {
      let copy = {};
      for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = this.deal(obj[attr]);
        }
      }
      return copy;
    }
    return obj;
  }
}
// var a = new Date();
// var a = {
//   a:"1",
//   b:2
// }
var a = {
  a: "1",
  b: {
    a: {
      c: {
        c: "s"
      }
    }
  }
}
// var a = [1,2,3,4];
// var a = [[1,2],[3],[4,[3,[3,4]]]];
var clone = new DeepClone(a)
console.log('clone', clone.deal(a));
console.log('a', a);
console.log(clone == a);