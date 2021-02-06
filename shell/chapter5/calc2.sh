#!bin/bassh

[ $# -ne 2 ] && {
  echo "USAGE $0 NUM1 NUM2"
  exit 1;
}

a=$1
b=$2

expr $a + $b + 1 &>/dev/null
[ $? -ne 0 ] && {
  echo "you must input two numbers"
  exit 2
}
# a=6
# b=2
echo "a-b=$(($a-$b))"
echo "a+b=$(($a+$b))"
echo "a*b=$(($a*$b))"
echo "a/b=$(($a/$b))"
echo "a**b=$(($a**$b))"
echo "a%b=$(($a%$b))"