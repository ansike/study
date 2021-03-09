#!/bin/bash
function usage(){
  echo "Usage: $0 content {red|green|yellow|blue}"
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

function add_color(){
  RED_COLOR='\033[1;31m'
  GREEN_COLOR='\033[1;32m'
  YELLOW_COLOR='\033[1;33m'
  BLUE_COLOR='\033[1;34m'
  RES='\033[0m'
  OS=$(uname)
  [ $# -ne 2 ] && {
    usage
  }

  case "$2" in
    red | RED)
      echoFn "${RED_COLOR}$1${RES}"
      ;;
    green|GREEN)
      echoFn "${GREEN_COLOR}$1${RES}"
      ;;
    yellow|YELLOW)
      echoFn "${YELLOW_COLOR}$1${RES}"
      ;;
    blue|BLUE)
      echoFn "${BLUE_COLOR}$1${RES}"
      ;;
    *)
      usage
      ;;
  esac
}

function main(){
  add_color $1 $2
}

main $*