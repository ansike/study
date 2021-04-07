#!/bin/bash
# touch stu_1_finished.jpg stu_2_finished.jpg stu_3_finished.jpg
resourceDir=./temp
targetDir=./target
rm -rf $targetDir
mkdir $targetDir

for file in `ls $resourceDir`
do
  # rename是最简单的，可以man rename 查看api
  # newFile=`echo $file | sed s/_finished//g`
  newFile=${file%_finished*}.jpg
  cp $resourceDir/$file $targetDir/$newFile
done
