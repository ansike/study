#!bin/bash
set -e

# 常见的算数运算符(()), let, expr, bc, $[], awk, declare

# 神奇的地方在于初始i没有值时默认为0的感觉
((i=i-1))
echo $i
echo $((i+2))
i=$((i+1))
echo $i

# true为1, false为0
echo "true:$((2<1||3>2))"
echo "false:$((2<1||3==2))"

# 做稍微复杂的综合数学运算
echo "1+2*5-4%6+10/5=$((1+2*5-4%6+10/5))"

# 特殊运算富豪 +=
echo "a+=2: $((a+=2))"
echo "a**2: $((a**2))"

if((1==2))
then
  echo "true"
else
  echo "false"
fi
