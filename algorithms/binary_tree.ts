//  Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

/**
 * LeetCode Problem (Easy):
 * 144. Binary Tree Preorder Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */
function preorderTraversal(root: TreeNode | null): number[] {

  const preorderValues: number[] = [];
  let cur: TreeNode | null = root;
  if (!cur) return [];

  function traverse(cur: TreeNode | null): void {
    if (!cur) return;
    preorderValues.push(cur.val);
    traverse(cur.left);
    traverse(cur.right);
  }

  traverse(cur);
  return preorderValues;
}

/**
 * LeetCode Problem (Easy):
 * 94. Binary Tree Inorder Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

function inorderTraversal(root: TreeNode | null): number[] {
  const inorderValues: number[] = [];
  let cur: TreeNode | null = root;
  if (!cur) return [];

  function traverse(cur: TreeNode | null): void {
    if (!cur) return;
    traverse(cur.left);
    inorderValues.push(cur.val);
    traverse(cur.right);
  }

  traverse(cur);
  return inorderValues;
}


/**
 * LeetCode Problem (Easy):
 * 145. Binary Tree Postorder Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

function postorderTraversal(root: TreeNode | null): number[] {
  const postorderValues: number[] = [];
  let cur: TreeNode | null = root;
  if (!cur) return [];

  function traverse(cur: TreeNode | null): void {
    if (!cur) return;
    traverse(cur.left);
    traverse(cur.right);
    postorderValues.push(cur.val);
  }

  traverse(cur);
  return postorderValues;
}

/**
 * LeetCode Problem (Medium):
 * 701. Insert into a Binary Search Tree
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  let cur: TreeNode | null = root;
  const newNode: TreeNode = new TreeNode(val);
  if (!cur) return newNode;
  while (true) {
    if (cur.val == val) break;
    if (cur.val > val) {
      if (cur.left) cur = cur.left;
      else {
        cur.left = newNode;
        break;
      }
    } else if (cur.val < val) {
      if (cur.right) cur = cur.right;
      else {
        cur.right = newNode;
        break;
      }
    }
  }
  return root;
}
