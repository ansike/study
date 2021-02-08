#!bin/bash
set -e
# 打印字符长度小于等于4的字符串
string="This is a string. You must be tired"

# Mac上这个length命令不支持
# expr length "$string"


for word in $string
  do
    if [ `expr length $word` -le 4 ]
      then
        echo $word
    fi
done