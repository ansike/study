#!/bin/bash
# 随机一个数[1, 60]让用户猜
# 用户输入想要猜的数，程序给出判断结果，大于，小于，正确。并返回尝试次数
set -e

total=0
Random=$((RANDOM%61))
echo "random number is $Random"

function usage(){
  echo "Usage: $0 Number"
  exit 1
}

function check_arg(){
  [ $# -ne 1 ] && {
    usage
  }
  expr $1 + 1 > /dev/null
  [ $? -ne 0 ] && {
    usage
  }
  return 0
}

function guess(){
  ((++total))
  read -p "Pls input a number you want to guess: " num
  check_arg $num
  echo "Input number is : $num"
  if [ $num -eq $Random ] 
    then
    echo "congratulations, your answer is right. guees times is: $total"
    exit 0
  elif [ $num -gt $Random ]
    then
    echo "sorry, your answer is bigger than the answer."
    guess
  else 
    echo "sorry, your answer is smaller than the answer."
    guess
  fi
}

function main(){
  while true
  do
    guess
  done
}

main