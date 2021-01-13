#!bin/bash
set -e
parameter="you are a good man, aren't a woman"
# ${parameter} // 输出变量的内容
echo ${parameter}

# ${parameter#} // 输出变量的长度
echo ${#parameter}
echo $parameter | awk '{print length($0)}'

# ${parameter:offset} // 从开始位置提取字串到结尾
echo ${parameter:4}
# ${parameter:offset:length} // 从开始位置提取字串到,长度为第二个参数
echo ${parameter:4:3}

# ${parameter#word} // 从开始删除最短字串, 删除'you '
echo ${parameter#y* }
echo ${parameter#you }
# ${parameter##word} // 从开始删除最长字串, 删除'you are a good man, aren't a '
echo ${parameter##y* }

# ${parameter#word} // 从结尾删除最短字串, 删除'n'
echo ${parameter%a*n}
# ${parameter##word} // 从开始删除最长字串, 删除'woman'
echo ${parameter%%a*n}

# ${parameter/pattern/word} // 替换字符串,匹配到的第一个字符串
echo ${parameter/are/will}

# ${parameter//pattern/word} // 替换字符串,匹配到的所有字符串
echo ${parameter//are/will be}
