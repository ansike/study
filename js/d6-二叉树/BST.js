/*
 * @Description: 二叉搜索树
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2019-12-31 16:18:09
 * @LastEditTime : 2020-01-03 14:41:11
 */
class Node {
  constructor(val, left, right) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insertNode(val) {
    let newNode = new Node(val, null, null);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let node = this.root;
    while (true) {
      let parent = node;
      if (val < node.value) {
        node = node.left;
        if (node === null) {
          parent.left = newNode;
          break;
        }
      } else {
        node = node.right;
        if (node === null) {
          parent.right = newNode;
          break;
        }
      }
    }
  }
  innerRecursiveOrder() {
    let res = [];
    let deal = node => {
      if (!node) return;
      deal(node.left);
      res.push(node.value);
      deal(node.right);
    };
    deal(this.root);
    return res;
  }
  afterRecursiveOrder() {
    let res = [];
    let deal = node => {
      if (!node) return;
      deal(node.left);
      deal(node.right);
      res.push(node.value);
    };
    deal(this.root);
    return res;
  }
  afterOrder() {
    let res = [];
    let deal = node => {
      let stack = [];
      while (node || stack.length) {
        while (node) {
          stack.push(node);
          node = node.left;
        }
        node = stack.pop();
        node = node.right;
        if (node) {
          stack.push(node);
          res.push(node.value);
        }
      }
    };
    deal(this.root);
    return res;
  }
}

let arr = [7, 3, 5, 9, 2, 12];
let bst = new BST();

arr.forEach(item => {
  bst.insertNode(item);
});

console.log(bst);
console.log("afterRecursiveOrder", bst.afterRecursiveOrder());
console.log("innerRecursiveOrder", bst.innerRecursiveOrder());
console.log("afterOrder", bst.afterOrder());
