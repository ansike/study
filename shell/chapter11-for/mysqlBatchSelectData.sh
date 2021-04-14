#!/bin/bash
USER=root
PASSWORD=123456
LOGINCMD="mysql -u$USER -p$PASSWORD"
for dbname in oldBody oldgirl xxx yyy
do
  $LOGINCMD -e "select * from ${dbname}.test\G;"
done