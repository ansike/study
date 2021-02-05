#!bin/bash
expr $1 + 1 &>/dev/null
[ $? -eq 0 ] && echo "int" || echo "chars"
