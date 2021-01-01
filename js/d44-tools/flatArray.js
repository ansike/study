/**
 * flat array
 */
function flatArray(arr) {
    if (!Array.isArray(arr)) return arr;
    // return arr.flat(Infinity);
    // return arr.join(",").split(",").map(item=>Number(item));

    const res = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res.push(...flatArray(item));
        } else {
            res.push(item)
        }
    });
    return res;
}

console.log(flatArray([1, 2, [4, 2, 3, [9]]]))
