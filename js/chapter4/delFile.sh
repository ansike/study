#!bin/bash
# 删除目录下的文件
set -e

delDir="$PWD/dir/del"
# find ${delDir:-/tmp} -name "a*.p" | xargs echo $1 | xargs rm -f
find ${delDir:-/tmp} -name "a*.p" | xargs echo $1 