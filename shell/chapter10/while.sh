#!/bin/bash
[ ! -d temp ] && {
  mkdir temp
}

[ ! -f temp/uptime.log ] && {
  touch temp/uptime.log
}

while true
do
  uptime >> temp/uptime.log
  sleep 1
done