/**
 * 生产hash
 */
var crypto = require("crypto");
var fs = require("fs");

const createFileHashAsync = absoluteFilePath => {
  return new Promise((resolve, reject) => {
    // 创建文件读写流
    const stream = fs.createReadStream(absoluteFilePath);
    const fsHash = crypto.createHash("sha256");

    stream.on("data", data => {
      fsHash.update(data);
    });

    stream.on("end", data => {
      const md5 = fsHash.digest("hex");
      resolve(md5);
    });
  });
};

const createFileHashSync = absoluteFilePath => {
  const buffer = fs.readFileSync(absoluteFilePath);
  const fsHash = crypto.createHash("sha256");
  fsHash.update(buffer);
  return fsHash.digest("hex");
};

module.exports = {
  createFileHashAsync,
  createFileHashSync
};
