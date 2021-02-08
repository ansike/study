#!bin/bash
i=2
i=i+8
echo $i

unset i
echo $i
i=2
# let i=i+8 
((i+=8))# 等同
echo $i