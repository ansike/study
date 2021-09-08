# 浏览器调起exe程序

1.准备阶段，创建一个注册表文件。eg：protocol.reg

```vbscript
Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\Webshell]
@="URL:Webshell Protocol Handler"
"URL Protocol"=""
[HKEY_CLASSES_ROOT\Webshell\DefaultIcon]
@="D:\\usually\\WeChat\\WeChat.exe"
[HKEY_CLASSES_ROOT\Webshell\shell]
[HKEY_CLASSES_ROOT\Webshell\shell\open]
[HKEY_CLASSES_ROOT\Webshell\shell\open\command]
@="\"D:\\usually\\WeChat\\WeChat.exe\" \"%1\""
```

以上所有的Webshell字样都可以修改为自定义的名字。@后边的路径就是要打开程序的硬盘路径，确保无误！

2.执行注册表文件，双击就好。注意关闭360等管家。

3.创建一个html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <a href="Webshell://test">aaa</a>
</body>
</html>
```

此处href中的协议名称必须和上边的Webshell对应！