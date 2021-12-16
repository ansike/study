const originData = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];

function compress(arr) {
  const res = [[arr[0], 1]];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] === res[res.length - 1][0]) {
      res[res.length - 1][1]++;
    } else {
      res.push([arr[index], 1]);
    }
  }
  return res;
}

function unCompress(arr) {
  return arr.reduce(
    (prev, cur) => prev.concat(new Array(cur[1]).fill(cur[0])),
    []
  );
}
const compressData = compress(originData);
console.log(compressData);
console.log(unCompress(compressData));

function compress2(arr, position = 0) {
  const res = [];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] === position) {
      const lastArr = res[res.length - 1];
      // 如果长度为1 或者连续为0
      if (lastArr && (lastArr.length === 1 || lastArr[1] === index - 1)) {
        lastArr[1] = index;
      } else {
        res.push([index]);
      }
    }
  }
  return {
    length: arr.length,
    position,
    range: res,
  };
}

function unCompress2(obj) {
  const { length, position, range } = obj;
  const res = range.reduce((prev, cur, index) => {
    const [start, end] = cur;
    return prev.concat(
      new Array(range[0][0]).fill(Number(!position)),
      new Array(end - start + 1).fill(position)
    );
  }, []);
  return res.concat(
    new Array(length - range[range.length - 1][1] - 1).fill(Number(!position))
  );
}
const compressData2 = compress2(originData);
console.log(compressData2);
console.log(unCompress2(compressData2));
