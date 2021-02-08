#!bin/bash
# 修改ori中的所有文件名字,去掉‘_temp’输出到res目录下
set -e

oriDir="$PWD/dir/ori"
resDir="$PWD/dir/res"

files=$(ls $oriDir)
for file in $files;
  do
  orifile="$oriDir/$file"
  changePath=`echo ${orifile/ori/res}`;
  resPath=`echo ${changePath/a_/a_temp_}`;
  mv $orifile $resPath;
done