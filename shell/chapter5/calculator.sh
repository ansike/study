#!bin/bassh
set -e

# mutiply divide add subtract
print_usage(){
  # printf "Please enter an integer\n"
  echo "Please enter an integer"
  exit 1
}

read -p "Please input first number:" firstNum

# 通过将输入的字符串使用sed格式化,判空来对数字做整数校验
if [ -n "`echo $firstNum | sed 's/[0-9]//g'`" ]
then
print_usage
fi

read -p "Please input first operators:" operators

if [ ${operators} != '+' ] && [ ${operators} != '-' ] && [ ${operators} != '*' ] && [ ${operators} != '/' ]
then
  echo "Please use (+|-|*|/)"
  exit 2
fi

read -p "Please input second number:" secondNum
# 通过将输入的字符串使用sed格式化,判空来对数字做整数校验
if [ -n "`echo $secondNum | sed 's/[0-9]//g'`" ]
then
print_usage
fi

echo "${firstNum}${operators}${secondNum}=$((${firstNum}${operators}${secondNum}))"