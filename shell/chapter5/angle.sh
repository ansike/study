#!bin/bash
set -e

if( test -z $1 )
  then
    read -p "Pls Input Max lines:" MAX
else
  MAX=$1
fi

echo $MAX

i=1
while [ $i -le $MAX ]
do
  j=1
  while [ $j -le $i ]
  do
    f=$[i-1]
    g=$[j-1]
    if [ $i -eq $j ] || [ $j -eq 1 ]
      then
        declare SUM_${i}_$j=1
    else
    # TODO 调换j和g的位置结果不一样, 直接A+B结果也不一样
      declare A=$[SUM_${f}_$j]
      declare B=$[SUM_${f}_$g]
      # declare SUM_${i}_$j=`expr $A + $B`
      declare SUM_${i}_$j=$[A+B]
    fi
    echo -en $[SUM_${i}_$j]"  "
    let j++
  done
  echo 
  let i++
done

# 1
# 1  1
# 1  2  1
# 1  3  3  1
# 1  4  6  4  1
# 1  5  10  10  5  1
# 1  6  15  20  15  6  1