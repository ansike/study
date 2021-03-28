#!/bin/bash

for file in `ls temp`
do
  mv temp/$file temp/`echo $file | cut -d . -f1`".text"
done