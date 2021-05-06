#/bin/bash
echo "SubShell Level: $BASH_SUBSHELL"
sub_var="SUb"
echo "parent_var=$parent_var"
echo "parent_env_var=$parent_env_var"
sleep 2
echo "SubShell is over"