# 徐明珠 
电子科技大学 研2

学习  视频 B + 书 + 博客

前端相关的项目
首页
导航, UI效果

===== html ====
H5的新标签, header, footer
Meta: viewport

响应式布局
流式布局 flex rem 媒体查询 less

===== css ====
元素垂直水平居中
position
margin
flex

盒模型
width 100 p 10 b 20 m 30
border-box 130
content-box 100

定位
position
absolute 脱离文档流
relative 

BFC OK

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