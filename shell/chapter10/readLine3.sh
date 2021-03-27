#!/bin/bash
[ $# -ne 1 ] && {
  echo "usage: $0 [file]"
  exit 1
}

function readFile() {
  [ ! -f $1 ] && {
    echo "文件不存在: $1"
    exit 2
  }
  cat $1 | while read line
  do
    echo $line
  # 输入重定向指向读取的文件
  done
}

readFile $1
