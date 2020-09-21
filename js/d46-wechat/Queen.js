

// N皇后问题
/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  const res = [];
  const initArr = [];
  for (let i = 0; i < n; i++) {
    initArr.push(new Array(n).fill('.'));
  }

  const deal = (row, arr, col, left, right) => {
    if (row === n) {
      res.push(JSON.parse(JSON.stringify(arr)));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (col.includes(i) || left.includes(row - i) || right.includes(row + i)) {
        continue;
      }
      arr[row][i] = 'Q';
      left.push(row - i);
      right.push(row + i);
      col.push(i);

      deal(row + 1, arr, col, left, right);

      arr[row][i] = '.';
      left.pop();
      right.pop();
      col.pop();
    }
  }
  deal(0, initArr, [], [], []);

  return res.map(item => item.map(it => it.join('')));
};

console.log(solveNQueens(4))