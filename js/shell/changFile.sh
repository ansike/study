#!/bin/bash

echo "shell"


for file in ./dir/*; do
  echo $file
  newPath = ${echo file | gsed 's/_\([a-z]\{1\}\)/\U\1/g'}
  echo $newPath
done
