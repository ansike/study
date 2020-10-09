// ======================================DFS============================================ //
// 递归写法
// const res = [];
function dfsRecu(root) {
  if (!root) return;
  // res.push(root.val); // 前序
  dfsRecu(root.left)
  // res.push(root.val); // 中序
  dfsRecu(root.right)
  // res.push(root.val); // 后序
}

// 借助栈实现非递归写法，前中后序遍历
function dfsWhile(root) {
  // const res = [];
  const stack = [];
  while (root || statck.length) {
    while (root) {
      stack.push(root);
      // res.push(root.val); // 前序
      root = root.left;
    }
    root = stack.pop();
    // res.push(root.val); // 中序
    root = root.right;
  }
}
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/
/**
  借助前序遍历实现后序遍历
  前序顺序是 根->左->右
  后序顺序是 左->右->根

  根据上述迭代步骤，实现转换方式为
  1.存储遍历结果的链表存储方式为头插入，即将 根 -> 左 -> 右 变为 右 -> 左 -> 根
  2.将遍历的顺序由从左到右修改为从右到左, 那么结果链表就变为了：左 -> 右 -> 根
 */
var postorderTraversal = function(root) {
  if(!root) return [];
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

// ======================================BFS============================================ //
// 借助队列实现层次遍历
function bfs(root) {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

// 102. 二叉树的层序遍历
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/submissions/
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
var levelOrder = function(root) {
  const res = [];
  const deal = (node, level) => {
      if(!node) return;
      if(res[level]){
          res[level].push(node.val);
      }else{
          res[level] = [node.val];
      }
      deal(node.left, level + 1);
      deal(node.right, level + 1);
  }
  deal(root, 0);
  return res
};

// var levelOrder = function(root) {
//     if(!root) return [];
//     const res = [];
//     const queue = [root];
//     while(queue.length){
//         let size = queue.length
//         const temp = [];
//         while(size--){
//             const node = queue.shift();
//             temp.push(node.val);
//             if(node.left) queue.push(node.left);
//             if(node.right) queue.push(node.right);
//         }
//         res.push(temp);
//     }
//     return res
// };