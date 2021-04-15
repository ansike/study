#!/bin/bash
# 打印长度大于6的单词
str="I am oldboy teacher welcome to oldboy class"
maxLength=6
# 计算字符串长度的方法
echo `echo $str | wc -L`
echo `expr length "$str"`
echo ${#str}
echo `echo $str | awk '{print length($0)}'`

# awk 方式
echo $str | awk '{for(i=1;i<=NF;i++) if(length($i)>6) print $i}'

# 数组方式
# arr=($str)
# for word in ${arr[*]}
# do
#   [ ${#word} -gt $maxLength ] && {
#     echo $word
#   }
# done

# for循环方式
# for word in $str
# do
#   [ ${#word} -gt $maxLength ] && {
#     echo $word
#   }
# done
