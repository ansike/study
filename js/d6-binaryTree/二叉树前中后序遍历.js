/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// ===================================前序遍历=============================================//
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = [];
  const stack = [];
  while(root || stack.length){
      while(root){
          stack.push(root);
          res.push(root.val);
          root = root.left;
      }
      root = stack.pop();
      root = root.right;
  }
  return res;
};

// var preorderTraversal = function(root) {
//     const res = [];
//     const deal = (node) => {
//         if(!node) return;
//         res.push(node.val);
//         deal(node.left);
//         deal(node.right);
//     }
//     deal(root);
//     return res;
// };

// ===================================中序遍历=============================================//
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = [];
  const stack = [];
  while(root || stack.length){
      while(root){
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      res.push(root.val);
      root = root.right;
  }
  return res;
};
// var inorderTraversal = function(root) {
//     const res = [];
//     const deal = (node) => {
//         if(!node) return;
//         deal(node.left);
//         res.push(node.val);
//         deal(node.right);
//     }
//     deal(root);
//     return res;
// };

// ===================================后序遍历=============================================//
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/**
  非递归算法，借助前序遍历实现后序遍历
  前序顺序是 根->左->右
  后序顺序是 左->右->根

  根据上述迭代步骤，实现转换方式为
  1.存储遍历结果的链表存储方式为头插入，即将 根 -> 左 -> 右 变为 右 -> 左 -> 根
  2.将遍历的顺序由从左到右修改为从右到左, 那么结果链表就变为了：左 -> 右 -> 根
 */
var postorderTraversal = function(root) {
  const res = [];
  const stack = [];
  while(root || stack.length){
      while(root){
          stack.push(root);
          res.unshift(root.val);
          root = root.right;
      }
      root = stack.pop();
      root = root.left;
  }
  return res;
};

// var postorderTraversal = function(root) {
//     const res = [];
//     const deal = (node) => {
//         if(!node) return;
//         node.left && deal(node.left);
//         node.right && deal(node.right);
//         res.push(node.val);
//     }
//     deal(root);
//     return res;
// };