// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 时间复杂度为O(n)
// 空间复杂度为O(n)
// 思想是借助队列的先进先出的特性，顺序将左右子树加入到队列中，先进先出顺序出队
var levelOrder = function(root) {
  if(!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length){
      const node = queue.shift();
      res.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
  }
  return res;
};