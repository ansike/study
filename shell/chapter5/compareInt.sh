#!bin/bash
read -p "Pls Ipt two numbers: " a b

[ -z "$a" -o -z "$b" ] && {
  echo "必须输入两个参数"
  exit 1
}

expr $a + $b + 1 &>/dev/null
[ $? -ne 0 ] && {
  echo "两个参数必须都是整数"
  exit 2
}

[ $a -gt $b ] && {
  echo "$a > $b"
  exit 0
}

[ $a -eq $b ] && {
  echo "$a == $b"
  exit 0
}

[ $a -lt $b ] && {
  echo "$a < $b"
  exit 0
}