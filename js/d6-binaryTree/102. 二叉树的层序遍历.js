// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//  在BFS的基础上记录每层的数量，处理完一层再继续下一层
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    const curLevel = [];
    while (len--) {
      const node = queue.shift();
      curLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(curLevel);
  }
  return res;
};