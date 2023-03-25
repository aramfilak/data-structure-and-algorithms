/**
 * LeetCode Problem:
 * 217. Contains Duplicate
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function containsDuplicate(nums: number[]): boolean {
  let map = new Map();
  for (const num of nums) {
    if (map.get(num) !== undefined) return true;
    else map.set(num, num);
  }
  return false;
}
