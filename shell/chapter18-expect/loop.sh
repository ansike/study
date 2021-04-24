#!/bin/bash
hosts=(
  47.98.143.211
)
for host in $hosts
do
  expect expect.exp ~/.ssh/id_rsa_expect.pub $host
done