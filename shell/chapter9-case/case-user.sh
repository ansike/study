#!/bin/bash
set -e

# load lib function
# . /etc/init.d/functions

FILE_PATH=/temp/openvpn_authfile.conf

# [ "$UID" -ne 0 ] && {
#   echo "You are not super user, please call root."
#   exit 1
# }

function usage(){
  echo "USAGE: sh $0 {-add|-del|-search} username"
  exit 1
}

[ $# -ne 2 ] && {
  usage
}

[ ! -f "$FILE_PATH" ] && touch "$FILE_PATH"

case "$1" in
  -a|-add)
    shift # 位置参数左移
    if [ `grep "^$1$" "$FILE_PATH" 2>&1` ]
      then
      echo "user: $1 is exist."
      exit
    else
      # 加锁操作可能和mac不一致
      # chattr -i "$FILE_PATH"
      /bin/cp ${FILE_PATH} "${FILE_PATH}.$(date +%F%T)"
      echo $1 >> ${FILE_PATH}
      [ $? -eq 0 ] && {
        echo "Add user: $1 success"
      }
      exit
      # chattr +i "$FILE_PATH"
    fi
  ;;
  -d|-del)
    shift
    if [ `grep "\b$1\b" ${FILE_PATH} | wc -l` -lt 1 ]
      then
      echo "user $1 is not exist."
      exit
    else
      /bin/cp ${FILE_PATH} "${FILE_PATH}.$(date +%F%T)"
      sed -i "/^$1$/d" ${FILE_PATH}
      [ $? -eq 0 ] && {
        echo "Del user: $1 success"
      }
      exit
    fi  
  ;;
  -s|-search)
    shift
    if [ `grep -w "$1" ${FILE_PATH} | wc -l` -lt 1 ]
      then
      echo "user $1 is not exist."
      exit
    else
      echo "user: $1 is exist."
      exit
    fi  
  ;;
  *)
    usage
  ;;
esac
