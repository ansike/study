/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-11-10 22:33:51
 * @LastEditTime: 2021-11-10 23:54:34
 */
class Range {
  constructor(from, to) {
    if (from > to) {
      throw `from:${from}必须比to:${to}小`;
    }
    this.from = from;
    this.to = to;
  }
  toString() {
    return `{ x | ${this.from} <= x <= ${this.to} }`;
  }
  [Symbol.iterator]() {
    const last = this.to;
    let next = this.from;
    return {
      next() {
        return next > last
          ? {
              value: undefined,
              done: true,
            }
          : {
              value: next++,
              done: false,
            };
      },
    };
  }
}

const ra = new Range(2, 7);
console.log(ra);
console.log([...ra]);
for (const iterator of ra) {
  console.log(iterator);
}

// 使用迭代器 重写map方法
function map(iterator, fn) {
  const it = iterator[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return {
        next() {
          const { value, done } = it.next();
          return {
            value: value ? fn(value) : value,
            done,
          };
        },
      };
    },
  };
}

console.log([...map(new Range(2, 5), (x) => x * x)]);

function map2(iterator, fn) {
  const res = [];
  for (const it of iterator) {
    res.push(fn(it));
  }
  return res;
}
console.log([...map2(new Range(2, 5), (x) => x * x)]);

// 字符串解析
class Words {
  constructor(str) {
    this.str = str;
  }
  [Symbol.iterator]() {
    let index = 0;
    const reg = /\s+|$/g;
    const str = this.str;
    reg.lastIndex = this.str.match(/[^ ]/).index;
    console.log(reg.lastIndex);
    return {
      next() {
        const index = reg.lastIndex;
        if (index === str.length) {
          return {
            value: undefined,
            done: true,
          };
        } else {
          const match = reg.exec(str);
          console.log(index, match, reg.lastIndex);
          return {
            value: str.substring(index, match.index),
            done: false,
          };
        }
      },
    };
  }
}
console.log([...new Words(" hello  world")]);
