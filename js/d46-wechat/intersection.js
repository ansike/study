const a = [1, 2, 3, 4];
const b = [3, 4, 5];
// 时间 O(n)
const insections = (a, b) => {
  const res = [];
  const newB = [...new Set(b)];
  const aMap = {};
  a.forEach(item => {
    aMap[item] = item;
  });
  newB.forEach(item => {
    if (typeof aMap[item] === 'number') {
      res.push(item);
    }
  })
  return res;
}

console.log(insections(a, b))