#/bin/bash
set -e

# node安装目录
node_install_folder=/usr/node
# bin命令目录
bin_folder=/usr/local/bin

function clear(){
  # 删除原有安装
  rm -rf ${bin_folder}/node ${bin_folder}/npm ${bin_folder}/npx
  rm -rf /usr/node/
  set +e
  version=`node -v`
  [ $? -ne 0 ] && {
    echo "node 卸载成功"
  } || {
    echo "node 卸载失败"
    exit 1
  }
  set -e
}

function install(){
  # 下载node安装包
  wget https://nodejs.org/dist/v12.9.1/node-v12.9.1-linux-x64.tar.xz

  # 解压移动文件夹，删除安装包
  tar -xvf node-v12.9.1-linux-x64.tar.xz
  rm -rf node-v12.9.1-linux-x64.tar.xz
  mv node-v12.9.1-linux-x64 ${node_install_folder}

  # 设置软链
  ln -s ${node_install_folder}/bin/node ${bin_folder}/
  ln -s ${node_install_folder}/bin/npm ${bin_folder}/
  ln -s ${node_install_folder}/bin/npx ${bin_folder}/
  version=`node -v`
  echo "node 安装成功，版本：$version"
}

function main(){
  [ $# -eq 0 ] && {
    clear
    install
  }
  # TODO 区分单独操作
}

main $*