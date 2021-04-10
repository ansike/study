#!/bin/bash
USER=root
DBPATH=./temp
PASSWORD=123456
LOGINCMD="mysql -u$USER -p$PASSWORD"
DUMPCMD="mysqldump -u$USER -p$PASSWORD"

[ ! -d $DBPATH ] && {
  mkdir -p $DBPATH
}
# 指定拷贝
# for dbname in oldBody oldgirl xxx yyy

# 获取mysql中的所需要数据库转存
for dbname in `${LOGINCMD} -e "show databases;" | sed '1' | egrep -v "mysql|schema"`
do
  $DUMPCMD $dbname | gzip > $DBPATH/${dbname}_$(date +%F)_sql.gz
done