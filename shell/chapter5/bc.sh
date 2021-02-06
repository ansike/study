#bin/bash
echo 2 + 2 | bc # 直接`echo 2+2`将会输出`2+2`字符串,使用bc能输出计算后的值
echo 2.1 + 2 | bc # 支持浮点运算(awk), 整数的话可以考虑(()), let, expr
echo "scale=2;12313/123" | bc # 使用scale保留2位小数
echo "scale=4;12313/13" | bc # 使用scale保留2位小数

# 配合变量做运算,效率略低下
i=5
i=`echo $i + 6 | bc`
echo $i


# 计算1加到n的值
# 1+2+3+4+5+6+7+8+9+10=55
# bc
echo `seq -s "+" 10`=`seq -s "+" 10 | bc`
# (())
echo `seq -s "+" 10`=$((`seq -s "+" 10`))
# expr, 注意操作符两边必须有空格
echo `seq -s "+" 10`=`seq -s " + " 10 | xargs expr`
# $[]
echo `seq -s "+" 10`=$[`seq -s "+" 10`]
