#/bin/bash
# 本地变量
parent_var="Parent"
# 环境变量
export parent_env_var="parent_env_var"
# 输出父shell同级，BASH_SUBSHELL为系统环境变量
echo "Shell start: ParentShell: Level: $BASH_SUBSHELL"
sh ./subshell.sh
sleep 1
echo "ParentShell start again"
echo "Shell start: ParentShell: Level: $BASH_SUBSHELL"
if [ -z $sub_var ]
then
  echo "sub_var is not defined in parent shell"
else
  echo "sub_var is defined $sub_var in parent shell"
fi
