// Leet Code 700. Search in a Binary Search Tree (Easy)
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const searchBST = function (root, val) {
  while (root && root.val !== val) {
    root = (val < root.val) ? root.left : root.right;
  }
  return root;
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 98. Validate Binary Search Tree (Medium)
const isValidBST = function (root) {
  function inorder(current) {
    function process(current) {
      if (!current) {
        return;
      }
      process(current.left);
      lst.push(current.val);
      process(current.right);
    }

    let lst = [];
    process(current);
    return lst;
  }

  let lst = inorder(root);
  for (let i = 1; i < lst.length; i++) {
    if (lst[i - 1] >= lst[i]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// Leet Code 230. Kth Smallest Element in a BST(Medium)
const kthSmallest = function (root, k) {
  function inorder(root, k) {
    if (k <= 0) return -1;
    if (!root) return k;
    k = inorder(root.left, k)
    if (k === 1) {
      ans = root.val;
      return 0;
    }
    k = inorder(root.right, k - 1);
    return k;
  }

  let ans = null;
  inorder(root, k);
  return ans;
};
