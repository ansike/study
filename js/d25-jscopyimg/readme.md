# 前端复制功能

目前工作中见到的前端复制功能有

- execCommand 主要说一下这个 api
- Clipoard.js 本质上是 execCommand 的一个兼容性封装 3K
- ZeroClipboard 加载一个 flash 绕过权限限制 一般不考虑
- setData 比较老 且是 IE 不考虑

### execCommand

```javascript
//获取一个selection对象
let selection = window.getSelection();
//创建一个range对象
let range = document.createRange();
//先移除所有的选区,后边放置自定义选区
selection.removeAllRanges();

//使用一个临时的dom,最后删掉
let textNode = document.createElement("span");
textNode.innerText = document
  .querySelector("#content")
  .getAttribute("data-copy");
document.body.appendChild(textNode);

//设置自定义选区
range.selectNodeContents(textNode);
selection.addRange(range);

//执行copy命令
document.execCommand("copy");
//最后移除不用的dom
document.body.removeChild(textNode);
```
