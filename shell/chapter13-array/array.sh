#!/bin/bash
array=(one two three)
# array2=($(ls ../))
array2=(`ls ../`)
array3=([1]=one [2]=two [3]=three)
array4[1]=one; array4[2]=two; array4[3]=three;
echo ${array[*]}
echo ${array[@]}
echo ${array2[@]}
echo ${array3[@]}
echo ${array4[@]}

# 增
array[3]=test
echo ${array[*]}
# 删
unset array[2]
echo ${array[*]}
# 改
array[1]=change
echo ${array[*]}
# 查
echo ${array[1]}

# 数组长度
echo ${#array}
