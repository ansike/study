#!/bin/bash
USER=root
PASSWORD=123456
LOGINCMD="mysql -u$USER -p$PASSWORD"

for dbname in oldBody oldgirl xxx yyy
do
  # 不存在则创建
  $LOGINCMD -e "create database IF NOT EXISTS $dbname"
  # 强制删除，重新创建
  # $LOGINCMD -e "drop database $dbname; create database $dbname"
done