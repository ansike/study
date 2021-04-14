#!/bin/bash
# chkconfig: 2345 40 90
# nginx 开机自启脚本
set -e
function usage(){
  echo "USAGE: $0 {start|stop|restart}"
  exit 1
}

[ $# -ne 1 ] && {
  usage
}

function start(){
  # netstat -lnt | grep 80
  # lsof -i:80 -P | grep "LISTEN"
  # 不要使用该方式，当前脚本中也有nginx关键字，查询不符合：[ `ps -ef | grep -v grep | grep nginx | wc -l` -gt 0 ] && {
  [ `netstat -lnt | grep 80 | wc -l` -gt 0 ] && {
    echo "nginx is started."
    exit 0
  }
  systemctl start nginx.service
  echo "nginx is started."
}

function stop(){
  [ `netstat -lnt | grep 80 | wc -l` -eq 0 ] && {
    echo "nginx is stopped."
    exit 0
  }
  systemctl stop nginx.service
  echo "nginx is stopped."
}

case $1 in 
  start)
    start
    ;;
  stop)
    stop
    ;;
  restart)
    systemctl restart nginx.service
    ;;
  *)
    usage
    ;;
esac