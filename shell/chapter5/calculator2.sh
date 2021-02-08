#!bin/bassh
set -e

# 该方法输入乘号需要转义 * => \*
print_usage(){
  printf $"USAGE: $0 NUM1 {+|-|*|/} NUM2\n"
  exit 1
}

if [ $# -ne 3 ]
then
  print_usage 
fi

firstNum=$1
operators=$2
secondNum=$3

if [ -n "`echo ${firstNum} | sed 's/[0-9]//g'`" ]
then
  print_usage
fi

if [ ${operators} != '+' ] && [ ${operators} != '-' ] && [ ${operators} != '*' ] && [ ${operators} != '/' ]
then
  print_usage
  exit 2
fi

if [ -n "`echo ${secondNum} | sed 's/[0-9]//g'`" ]
then
  print_usage
fi

echo "${firstNum}${operators}${secondNum}=$((${firstNum}${operators}${secondNum}))"