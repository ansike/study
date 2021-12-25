const fs = require("fs");
const path = require("path");

const dirpath = path.resolve(__dirname, "./data");

generate();

// 构建10个 100000个数据的json文件
function generate() {
  const size = 1000000;
  const fileNum = 10;
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
  }
  for (let i = 0; i < fileNum; i++) {
    let index = 0;
    const fileName = i + 1 + ".json";
    let arr = Array.from({ length: size }, () => {
      return {
        id: (i + 1) * size + index++,
        age: Math.floor(Math.random() * 100),
      };
    });
    fs.writeFile(
      `./data/${fileName}`,
      JSON.stringify(arr),
      "utf-8",
      (err, res) => {
        if (!err) {
          console.log(`${i + 1}.json done`);
        }
      }
    );
  }
}
