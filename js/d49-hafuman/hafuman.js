const str = "this is a string";
/**
1. 创建赫夫曼树
  1.1 根据字符串生成频率表
  1.2 根据频率表生成树
2. 生成字符和字节码对应表
3. 根据表编码文本字符串
 */

class Node {
  constructor(val, fre, isLeaf){
    this.val = val;
    this.fre = fre;
    this.isLeaf = isLeaf;
    this.left = null;
    this.right = null;
  }
}

/**
 * 
 * @param {string} str 
 * @return {string} res
 */
function HafumanEncode(str){
  const strArr = str.split("");
  // 获取频度
  const requencyMap = getFrequency(strArr);
  // 构建哈夫曼树
  const tree = createTree(requencyMap);
  // 生成encode字典表
  const encodeDictionary = generateDictionary(tree);
  // 生成decode字典表
  const decodeDictionary = {};
  for(const key in encodeDictionary){
    decodeDictionary[encodeDictionary[key]] = key;
  }
  console.log(encodeDictionary);
  console.log(decodeDictionary);

  // 将字符串转码为字节码
  const encodeStr = encodeStrFn(str, encodeDictionary);
  console.log(encodeStr);

  // 将字节码转码为字符串
  const decodeStr = decodeStrFn(encodeStr, decodeDictionary);
  console.log(decodeStr);

}

/**
 * @description 获取字符频度
 * @param {string[]} arr
 * @return {{[key:string]: number}} res
 */
const getFrequency = (arr) => {
  const requencyMap = {};
  arr.map((item)=>{
    if(requencyMap[item]){
      requencyMap[item] += 1;
    }else{
      requencyMap[item] = 1;
    }
  })
  const requencyMapKeys = Object.keys(requencyMap);

  requencyMapKeys.map(item=>{
    requencyMap[item] = (requencyMap[item]);
  });
  return requencyMap
}

/**
 * @description 根据字符频度构建赫夫曼树
 * @param {{[key:string]: number}} res
 * @return { } tree 及字符对应规则
 */
const createTree = (requencyMap) => {
  const newMap = JSON.parse(JSON.stringify(requencyMap));
  for(const val in newMap){
    const fre = newMap[val]
    newMap[val] = new Node(val, fre, true)
  }

  const temoMap = {};
  const create = () => {
    const {minKey: val1, node: node1} = getMin(newMap);
    delete newMap[val1];
    const {minKey: val2, node: node2} = getMin(newMap);
    delete newMap[val2];

    const key = val1 + val2;
    const value = node1.fre + node2.fre;
    const parentNode = new Node(key, value, false);
    parentNode.left = node1;
    parentNode.right = node2;
    newMap[key] = parentNode;
    temoMap[key] = parentNode
  };

  // 逆向构建树生成
  while(Object.keys(newMap).length > 1){
    create();
  }
  const tree = Object.values(newMap)[0];
  // console.log(JSON.stringify(tree));
  return tree;
}

/**
 * @description 获取频度最小的值
 * @param {{[key:string]: Node}} requencyMap
 * @return { Object } {minKey, Node}
 */
const getMin = (requencyMap) => {
  const mapKeys = Object.keys(requencyMap);
  const mapValues = Object.values(requencyMap);
  
  let minKey = mapKeys[0];
  let minNode = mapValues[0];
  mapValues.forEach((item, index)=>{
    if(item.fre < minNode.fre){
      minKey = mapKeys[index];
      minNode = item;
    }
  })
  return {
    minKey,
    node: minNode
  }
}

/**
 * @description 生成字典表
 * @param { Node } tree
 * @return { } 字典表
 */
const generateDictionary = (tree) => {
  const map = {};
  const deal = (node, level) => {
    if(!node) return;
    if(!node.left && !node.right){
      map[node.val] = level;
      return;
    }
    deal(node.left, level + '0');
    deal(node.right, level + '1');
  }
  deal(tree, '');
  return map;
}

const encodeStrFn = (str, dic) => {
  return str.split("").map(item=>{
    return dic[item];
  }).join("");
}

const decodeStrFn = (str, dic) => {
  const strArr = str.split("");
  let res = "";
  strArr.reduce((prev, cur)=>{
    const combine = prev + cur;
    if(dic[combine]){
      res += dic[combine];
      return ''
    }else{
      return combine;
    }
  },'');
  return res;
}

HafumanEncode(str);
