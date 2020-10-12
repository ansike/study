/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// https://leetcode-cn.com/problems/invert-binary-tree/submissions/
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  if (root.left) {
    invertTree(root.left)
  }
  if (root.right) {
    invertTree(root.right)
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root
};

// 递归简略
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right;
  root.right = left;
  return root
};

// 迭代
var invertTree = function (root) {
  if (root === null) return null;
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    const temp = cur.left;
    cur.left = cur.right;
    cur.right = temp;
    if (cur.left) stack.push(cur.left)
    if (cur.right) stack.push(cur.right)
  }
  return root
};