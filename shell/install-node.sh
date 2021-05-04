#/bin/bash

# node安装目录
node_install_folder=/usr/node
# bin命令目录
bin_folder=/usr/local/bin

# 删除原有安装
rm -rf ${bin_folder}/node ${bin_folder}/npm ${bin_folder}/npx
rm -rf /usr/node/

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
echo "node 安装成成，版本：$version"