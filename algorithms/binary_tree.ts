//  Definition for a binary tree node.
import {resolveObjectURL} from "buffer";
import * as querystring from "querystring";
import * as trace_events from "trace_events";

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
 * LeetCode Problem (Easy):
 * 700. Search in a Binary Search Tree
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root) {
    if (val === root.val) return root;
    if (val < root.val) root = root.left;
    else root = root.right;
  }
  return null;
}

/**
 * LeetCode Problem (Easy):
 * 404. Sum of Left Leaves
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum: number = 0;
  if (!root) return sum;
  const stack: [TreeNode, boolean][] = [[root, false]];
  while (stack.length) {
    const [node, isLeft] = stack.pop()!;
    if (node.left) {
      stack.push([node.left, true]);
    }
    if (node.right) {
      stack.push([node.right, false]);
    }
    if (!node.left && !node.right && isLeft) {
      sum += node.val;
    }
  }
  return sum;
}

/**
 * LeetCode Problem (Easy):
 * 101. Symmetric Tree
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */
function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root, root);

  function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (!right || !left) return false;
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
}

/**
 * LeetCode Problem (Easy):
 * 100. Same Tree
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */
function isSameTree(first: TreeNode | null, second: TreeNode | null): boolean {
  if (!first && !second) return true;
  if (!first || !second) return false;
  return first?.val === second?.val
    && isSameTree(first?.left, second?.left)
    && isSameTree(first?.right, second.right);

}

/**
 * LeetCode Problem (Easy):
 * 938. Range Sum of BST
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0;
  return (root.val >= low && root.val <= high ? root.val : 0)
    + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
}

/**
 * LeetCode Problem (Easy):
 * 226. Invert Binary Tree
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  dfs(root);

  function dfs(root: TreeNode | null): void {
    if (!root?.left && !root?.right) return;
    [root!.left!.val, root!.right!.val] = [root!.right!.val, root!.left!.val];
    if (root.left) dfs(root.left)
    if (root.right) dfs(root.right)
  }

  return root
}

/**
 * LeetCode Problem (Easy):
 * 112. Path Sum
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;
  return hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
}

/**
 * LeetCode Problem (Easy):
 * 653. Two Sum IV - Input is a BST
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();

  function twoSumDFS(root: TreeNode | null, k: number): boolean {
    if (!root) return false;
    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return twoSumDFS(root.left, k) || twoSumDFS(root.right, k);
  }

  return twoSumDFS(root, k);
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

/**
 * LeetCode Problem (Medium):
 * 102. Binary Tree Level Order Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const level: number[] = [];
    const levelSize: number = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const {val, left, right} = queue.shift()!;
      level.push(val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    result.push(level);
  }
  return result;
}

/**
 * LeetCode Problem (Medium):
 * 104. Maximum Depth of Binary Tree
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function maxDepth(root: TreeNode | null): number {
  let depth: number = 0;
  if (!root) return depth;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const levelSize: number = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const {left, right} = queue.shift()!;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    depth++;
  }
  return depth;
}

/**
 * LeetCode Problem (Medium):
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let qPath: TreeNode[] = [], pPath: TreeNode[] = []
  if (q) qPath = findPathToTargetNode(root, q);
  if (p) pPath = findPathToTargetNode(root, p);
  function findPathToTargetNode(root: TreeNode | null, target: TreeNode): TreeNode[] {
    const path: TreeNode[] = [];
    let cur: TreeNode | null = root;
    while (cur) {
      path.push(cur)
      if (cur.val === target?.val) break;
      if (target?.val < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return path;
  }
  let i = 0;
  let minLen = Math.min(qPath.length,pPath.length) ;
  let ans:  TreeNode | null = null
  while (qPath[i] === pPath[i] && i < minLen) {
    ans = qPath[i];
    i++;
  }

  return ans;
}

