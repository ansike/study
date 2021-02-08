#!bin/bash
set -e

#用于计算, 数字左右必须有空格
# expr 2 + 2
# expr 2 \* 2 #乘号需要转义
# expr 2 / 2
# expr 2 - 2

#打开上方expr之后发现正常命令执行有问题
#配合变量计算
i=2
i=`expr $i + 2`
echo $i