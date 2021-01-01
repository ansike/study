/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  const arr = [];
  const deal = (node) => {
    if (!node) {
      return;
    }
    deal(node.left);
    arr.push(node.val);
    deal(node.right);
  }
  deal(root);
  this.arr = arr;
  this.index = 0;
};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function () {
  console.log(this.index)
  return this.arr[this.index++];
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function () {
  return this.arr.length > this.index;
};

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
var obj = new BSTIterator(root)
var param_1 = obj.next()
var param_2 = obj.hasNext()
console.log(param_1);
console.log(param_2);