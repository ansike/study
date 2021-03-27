#!bin/bash
set -e

read -p "Pls input a number: " Num

[ "$Num" = "1" ] && {
  echo "1"
  exit 0
}

[ "$Num" = "2" ] && {
  echo "2"
  exit 0
}


echo "input 1 or 2"
exit 1

