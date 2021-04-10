#!/bin/bash
USER=root
DBPATH=./temp
PASSWORD=123456
LOGINCMD="mysql -u$USER -p$PASSWORD"
DUMPCMD="mysqldump -u$USER -p$PASSWORD"

# 指定拷贝
# for dbname in oldBody oldgirl xxx yyy

# 获取mysql中的所需要数据库转存
# for dbname in `${LOGINCMD} -e "show databases;" | sed '1d' | egrep -v "mysql|schema"`
# do
#   $DUMPCMD $dbname | gzip > $DBPATH/${dbname}_$(date +%F)_sql.gz
# done

rm -rf $DBPATH
for dbname in `${LOGINCMD} -e "show databases;" | sed '1d' | egrep -v "mysql|schema"`
do
  mkdir -p $DBPATH/${dbname}
  for table in `${LOGINCMD} -e "use ${dbname}; show tables;" | sed '1d'`
  do
    $DUMPCMD $dbname $table | gzip > $DBPATH/${dbname}/${table}_$(date +%F)_sql.gz
  done
done

