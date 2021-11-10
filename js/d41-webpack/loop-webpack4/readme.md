# webpack 中循环引用

在浏览器中执行
<img src="./20211021-232042.png">

在node中执行
```javasscript
node main.js
in b.js
in b.js aDone=undefined
in a.js
in a.js bDone=true
in index.js
in index.js aDone=undefined a=a bDone=true b=b
```