#/bin/bash
parent_var="Parent"
# 输出父shell同级，BASH_SUBSHELL为系统环境变量
echo "Shell start: ParentShell: Level: $BASH_SUBSHELL"
(
  echo "SubShell Level: $BASH_SUBSHELL"
  sub_var="SUb"
  echo "parent_var=$parent_var"
  sleep 2
  echo "SubShell is over"
)

sleep 1
echo "ParentShell start again"
echo "Shell start: ParentShell: Level: $BASH_SUBSHELL"
if [ -z $sub_var ]
then
  echo "sub_var is not defined in parent shell"
else
  echo "sub_var is defined $sub_var in parent shell"
fi