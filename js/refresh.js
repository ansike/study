let arr = [1, 2, 3, 4, 5];

let main = (arr) => {
    let res = [];
    while (arr.length) {
        let index = Math.floor(Math.random() * arr.length);
        res.push(arr[index]);
        arr.splice(index, 1);
    }
    return res;
}

console.log(main(arr));