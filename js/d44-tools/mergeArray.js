/**
 * 多个数组区间相交的话进行合并
 */
function mergeArray(arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let res = [arr.shift()];
    while (arr.length) {
        let cur = arr.shift();
        let prev = res.pop();
        if (prev[1] > cur[0]) {// 有交集
            res.push([prev[0], prev[1] > cur[1] ? prev[1] : cur[1]]);
        } else {
            res.push(prev, cur);
        }
    }
    return res;
}

console.log(mergeArray([[1, 3], [2, 3], [5, 9], [7, 8], [4, 10]]));