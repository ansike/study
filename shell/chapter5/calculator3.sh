#!bin/bassh
set -e
# 该方法没有校验参数, 参数最好放在“”中,避免乘号转义,及空格的问题
expression=$1
echo "${expression}=$((${expression}))"