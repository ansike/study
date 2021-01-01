/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) {
    return true;
  } else {
    return Math.abs(calcHeight(root.left) - calcHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
  }
};

const calcHeight = (node) => {
  if (node === null) {
    return 0;
  } else {
    return Math.max(calcHeight(node.left), calcHeight(node.right)) + 1;
  }
}


var isBalanced = function (root) {
  if (root === null) {
    return true;
  } else {
    return calcHeight() <= 1;
  }
};

const calcHeight = (node) => {

}
