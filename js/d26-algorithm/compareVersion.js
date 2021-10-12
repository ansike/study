/*
 * @Description: 比较版本号大小
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-10-12 09:09:49
 * @LastEditTime: 2021-10-12 09:43:36
 */

const compareVersion = (version1, version2) => {
  const vArr1 = version1.split(".");
  const vArr2 = version2.split(".");
  const maxLength = Math.max(vArr1.length, vArr2.length);
  let index = 0;
  while (true) {
    if (index === maxLength) {
      break;
    }
    const v1 = vArr1[index] || 0;
    const v2 = vArr2[index] || 0;

    if (+v1 !== +v2) {
      return +v1 > +v2 ? 1 : -1;
    }
    index++;
  }
  return 0;
};

console.log(compareVersion("1.0", "1.0.0")); // 0
console.log(compareVersion("1.0.1", "1")); // 1
console.log(compareVersion("1.01", "1.001")); // 0
console.log(compareVersion("0.1", "1.1")); // -1
console.log(compareVersion("1.1", "1.1")); // 0
console.log(compareVersion("1.1", "1.0")); // 1
