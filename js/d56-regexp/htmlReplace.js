//  将str中的{{}}替换成对象中的值
const str = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>{{name}}</div>
  <div>{{str}}</div>
</body>
</html>`;

const obj = {
  name: 'Damon',
  str: '这是一个描述'
}
const replacefn = (str, obj) => {
  let flag = true;
  const reg = /{{(\w*)}}/g;
  while (flag) {
    const res = reg.exec(str);
    if (res) {
      const cur = res[1];
      str = str.replace(new RegExp(`{{${cur}}}`, "g"), obj[cur]);
    } else {
      flag = false;
    }
  }
  return str;
};

const resStr = replacefn(str, obj);
console.log("resStr", resStr);