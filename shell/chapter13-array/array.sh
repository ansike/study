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

# 截取数组
echo ${array[*]}
# 截取位置到结尾
echo ${array[*]:1}
# 截取位置及长度
echo ${array[*]:1:1}

# 删除数组
array[4]=one4one
# 从头开始 one change test one4one
echo ${array[*]} 
echo ${array[*]#one} #change test 4one
echo ${array[*]##one*} # change test
# 从尾开始 one change test one4one
echo ${array[*]}
echo ${array[*]%one} # change test one4
echo ${array[*]%%one*} # change test

# 替换数组
echo ${array[*]}
# 仅第一次匹配到替换
echo ${array[*]/one/one1}
# 匹配到所有替换
echo ${array[*]//one/one1}