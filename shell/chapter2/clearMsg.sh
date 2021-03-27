#!bin/bash
set -e

LOG_DIR='/var/log'
ROOT_UID=0 # 0代表root用户
echo $UID

if [ "$UID" -ne "$ROOT_UID" ]; then
  echo "Must be root to run this script."
  exit 1
fi

cd $LOG_DIR || {
  echo "Can't change to necessary directory."
  exit 1
}

cat /dev/null>message && {
  echo "Logs cleared up."
  exit 0
}

echo "Logs clear up failed."
exit 1