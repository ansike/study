#!/bin/bash
RED_COLOR='\033[1;31m'
GREEN_COLOR='\033[1;32m'
YELLOW_COLOR='\033[1;33m'
BLUE_COLOR='\033[1;34m'
RES='\033[0m'
OS=$(uname)

function menu() {
  cat <<END
1.apple
2.pear
3.banana
4.cherry
END
}

function usage(){
  echo "must be {1|2|3|4}"
  exit 1
}

# 区分mac和其他系统
function echoFn() {
  if [ "${OS}" == "Darwin" ]
    then
      echo $1
    else
      echo -e $1
    fi
  
}

function choice(){
  read -p "Pls select a num: " num
  # mac中不需要-e
  case "$num" in
    1)
      echoFn "${RED_COLOR}apple${RES}"
      ;;
    2)
      echoFn "${GREEN_COLOR}pear${RES}"
      ;;
    3)
      echoFn "${YELLOW_COLOR}banana${RES}"
      ;;
    4)
      echoFn "${BLUE_COLOR}cherry${RES}"
      ;;
    *)
      usage
      ;;
  esac
}

function main(){
  menu
  choice
}

main