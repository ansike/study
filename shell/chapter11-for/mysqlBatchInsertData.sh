#!/bin/bash
USER=root
PASSWORD=123456
LOGINCMD="mysql -u$USER -p$PASSWORD"
for dbname in oldBody oldgirl xxx yyy
do
  $LOGINCMD -e "use ${dbname}; create table if not exsits test(id int, name varchar(12)); insert into test values (1, 'testData')"
done