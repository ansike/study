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
  this.index = 0;
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
};

// 非递归写法
// var BSTIterator = function(root) {
//   const data = [];
//   this.index = 0;
//   let stack = [];
//   let node = root;
//   while(node || stack.length > 0){
//       while(node){
//           stack.push(node);
//           node = node.left;
//       }
//       node = stack.pop();
//       data.push(node.val);
//       node = node.right;
//   }
//   this.data = data;
// };

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