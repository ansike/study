#!bin/bash
# 检查bash是否有漏洞
env x='()  { :;}; echo be careful' bash -c "echo this is a test"