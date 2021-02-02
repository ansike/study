#!bin/bassh
set -e

# mutiply divide add subtract
print_usage(){
  printf "Please enter an integer\n"
  exit 1
}

read -p "Please input first number:" firstNum

# 通过将输入的字符串使用sed格式化,判空来对数字做整数校验
if [ -n "`echo $firstNum|sed 's/[0-9]//g'`" ]
then
print_usage
fi



