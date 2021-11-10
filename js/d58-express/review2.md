# 徐明珠 
电子科技大学 研2


===== js ====
function merge(obj1, obj2)
const obj ={
    a: {
      aa: 1,
    },
    b: { bb: 2 },
    c: { cc: 3 },
  }

const obj2 = {
  a: {
    aa2: 1,
  },
  b: { bb2: 2 },
  c: { cc2: 3 },
};

function merge(obj1, obj2){
    const newObj = {};
    const keys = Object.keys(obj1);
    keys.forEach(item=>{
        newObj[item] = Object.assign({}, obj1[item], obj2[item]);
    })
    return newObj;
}

实现move方法
sdfghjklkjhgf => hgfsdfghjklkj
function move(str, num){
    const realLength = num % str.length;
    const cur = str.substr(0, str.length - realLength);
    const prev = str.substr(str.length - realLength);
    return prev+cur;
}

