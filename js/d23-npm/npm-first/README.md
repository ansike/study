### 说明:
当前项目安装了npm-command包, npm-command包导出了一个npmCommand命令,
该命令读取参数 npm的参数, 读取参数传入的地址, 读取文件内容并打印

### 调用:
```shell
npm run binCommand -- ./lib/index.js
```

### 命令包导出注意点
1. 命令的执行只能使用npm执行, `--`是表示npm追加参数,追加的参数会放到`process.env.npm_config_argv.remain`中
2. 读取参数路径,并使用当前命令调用路径`process.pwd()`当作基路径
3. 在package.json中`bin`字段对象中添加命令的key及实际执行的文件