#!/bin/bash
set -e
for ((i=1;i<=9;i++))
do
  str=""
  for ((j=1;j<=$i;j++))
  do
    str="$str $i*$j=$((i*j))"
  done
  echo $str
done
