//  将str中的id替换成随机唯一数字,ID不止有一个
const str = `asdasd id="aaaa", asdjaskdakljkl sss=(#aaaa)`;

const replacefn = (str) => {
  let flag = true;
  const reg = /id\=\"(\w*)\"/g;
  while (flag) {
    const res = reg.exec(str);
    if (res) {
      const cur = res[1];
      str = str.replace(new RegExp(cur, "g"), Math.random());
    } else {
      flag = false;
    }
  }
  return str;
};

const resStr = replacefn(str);
console.log("resStr", resStr);