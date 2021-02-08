#!bin/bash
# TODO查找删除远端无用分支
set -e

# 获取所有的ref指针对象
#git for-each-ref

# 格式化ref
#git for-each-ref --format='%(committerdate)%09  %(authorname) %09 %(refname)'| grep 'refs/remotes' | grep '安思科'

# 更新远端分支信息
git remote update origin --prune