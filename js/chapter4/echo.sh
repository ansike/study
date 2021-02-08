#!bin/bash
set -e

[ ! -d "./dir/echo" ] && {
  mkdir "./dir/echo"
}

echo "this is a sentence." >> "./dir/echo/a1"
echo -e "this is a sentence\n This is a nother sentence." >> "./dir/echo/a2"
echo -n "this is a sentence\n This is a nother sentence." >> "./dir/echo/a3"