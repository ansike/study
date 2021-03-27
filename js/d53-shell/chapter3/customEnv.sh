#!bin/bash
set -e

# 自定义环境变量,在命令行中输入执行
export testA=1
testB=2; export testB
declare -x testC=3

# 查看env，会有三个变量

# 永久性设置环境变量可以考虑的范围
## 系统级
cat /etc/profile
cat /etc/bashrc

## 部分用户的
cat ~/.bash_profile
cat ~/.bashrc

## 一般profile会调用bashrc
## 从mac上看每次打开新的窗口都会调用bash_profile和bashrc