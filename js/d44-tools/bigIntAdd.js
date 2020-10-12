/**
 * 超越整型范围的大数字相加/或者说数字字符串相加（不能直接使用两数相加）
 */
function bigIntAdd(a, b) {
    a.length > b.length ? b = "0".repeat(a.length - b.length) + b : a = "0".repeat(b.length - a.length) + a;
    let aArr = a.split("");
    let bArr = b.split("");
    let res = new Array(aArr.length + 1).fill(0);
    for (let i = aArr.length - 1; i >= 0; i--) {
        let sum = Number(aArr[i]) + Number(bArr[i]);
        if (sum > 9 || res[i + 1] + sum > 9) { // 相加的和大于9 或者相加的和加原位置有的数大于9的情况下
            res[i] += 1
            res[i + 1] = sum + res[i + 1] - 10;
        } else {
            res[i + 1] += sum;
        }
    }
    res[0] === 0 && (res = res.slice(1));
    return res.join("");
}


console.log(bigIntAdd("1234567890", "12456789"))