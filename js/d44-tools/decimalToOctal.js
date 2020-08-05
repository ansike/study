/**
 * 十进制转八进制
 */
function decimalToOctal(num) {
    let res = [];
    while (num) {
        res.push(num % 8);
        num = Math.floor(num / 8);
    }
    return res.reverse().join("");
}
console.log(decimalToOctal(1348));

/**
 * 十进制转其他进制(小于10)
 */
function decimalToOther(num, binarySys) {
    const reg = /^[1-9]*$/;
    if (!reg.test(num) || !reg.test(binarySys)) throw new Error(`【Arguments Error】:参数必须为大于0的正整数~`);
    if (binarySys < 2) throw new Error(`【Arguments Error】:参数binarySys必须大于2~`);
    let res = [];
    while (num) {
        res.push(num % binarySys);
        num = Math.floor(num / binarySys);
    }
    return res.reverse().join("");
}

function otherTodecimal(num, binarySys) {
    if (binarySys < 2) throw new Error(`【Arguments Error】:参数binarySys必须大于2~`);
    let numArr = (num + "").split("");
    let len = numArr.length - 1;
    return numArr.reduceRight((prev, cur, index) => {
        return prev + cur * Math.pow(binarySys, len - index);
    }, 0);
}

let n = 1348;
console.log(decimalToOther(n, 2));
console.log(n.toString(2));
console.log(decimalToOther(n, 3));
console.log(n.toString(3));
console.log(decimalToOther(n, 9));
console.log(n.toString(9));
console.log(otherTodecimal(1757, 9));
console.log(parseInt(1757,9))
//十进制转其他
// var x=110;
// w(x);
// w(x.toString(8));
// w(x.toString(32));
// w(x.toString(16));

// //其他转十进制
// var x='110';
// w(parseInt(x,2));
// w(parseInt(x,8));
// w(parseInt(x,16));