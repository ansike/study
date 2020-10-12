/**
 * 判断a,b 两个值是否相等
 */
let a = {a:2,c:[1,{b:3}]};
let b = {a:2,c:[1,{b:3}]};
function isEqual(a, b){
    if(!a || !b || typeof a !== "object" && typeof b !== "object") return a === b;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if(aKeys.length != bKeys.length){
        return false;
    }
    return aKeys.every(key=>{
        let ao = a[key];
        let bo = b[key];
        if(typeof ao === "object" && typeof bo === "object"){
            return isEqual(ao, bo);
        }
        return ao === bo;
    })
};

// test
// console.log(isEqual(a,b));
// console.log(isEqual([1,2,3],[1,2,3]));
// console.log(isEqual(1,1));
// console.log(isEqual("1","1"));
// console.log(isEqual("1",1));