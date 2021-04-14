#!bin/bash
set -e
# Linux系统内存监控报警脚本
# 小于100M邮件报警，每隔三分钟检查一次
# 1. 获取内存大小
# 2. 判断是否小于100M
# 3. 发送邮件


# 4. 添加定时任务
Limit=10000
Memo=`free -m | awk 'NR==3 {print $NF}'`
echo $Memo
echo "内存小于【$Limit】，当前内存剩余【$Memo】"
if [ "$Memo" -lt "$Limit" ]
  then
# https://blog.csdn.net/qq_42859864/article/details/84862977
# 设置/etc/mail.rc # 
#set from=15910250965@163.com smtp=smtps://smtp.163.com:465
#set smtp-auth-user=15910250965@163.com smtp-auth-password=xxx smtp-auth-login

# 发送命令
# echo "text" | mail -s "title" email@xx.com
    echo "开始发送邮件"
    echo "内存小于【$Limit】，当前内存剩余【$Memo】" | mail -s "内存紧张报警邮件" 15910250965@163.com
    [ $? -eq 0 ] && {
      echo "发送邮件成功"
      exit 0;
    } || {
      echo "发送邮件失败"
      exit 1;
    }
fi
