#!bin/bash
while true
  do
    read -p "Plase input: " i
    expr $i + 1 >/dev/null 2>&1
    [ $? -eq 0 ] && echo "int" || echo "chars"
done