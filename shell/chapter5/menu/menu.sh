#!bin/bash
set -e
curPath=$(pwd)

# 该方式输出提示
cat <<END
1.[install lamp]
2.[install lnmp]
3.[exit]
pls input the num you want:
END

read num

expr $num + 1 &>/dev/null
[ $? -ne 0 ] && {
  echo "参数必须是(1|2|3)"
  exit 1
}

[ $num -eq 1 ] && {
  echo [ -x "$curPath/scripts/lamp.sh" ] && echo 1
  [ -x "$curPath/scripts/lamp.sh" ] || {
    echo "$curPath/scripts/lamp.sh 必须存在且具有可执行权限"
    exit 2
  }
  source $curPath/scripts/lamp.sh
  exit $?
}

[ $num -eq 2 ] && {
    [ -x "$curPath/scripts/lnmp.sh" ] || {
    echo "$curPath/scripts/lnmp.sh 必须存在且具有可执行权限"
    exit 2
  }
  source $curPath/scripts/lnmp.sh
  exit $?
}

[ $num -eq 3 ] && {
  echo "退出"
  exit $?
}

[[ ! $num =~ [1-3] ]] && {
  echo "参数必须是(1|2|3)"
  exit 3
}