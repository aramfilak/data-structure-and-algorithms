/**
 * LeetCode Problem:
 * 53. Maximum Subarray
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxSubArray(nums: number[]): number {
  let max = nums[0] , sum= 0;
  for (let i = 0 ; i< nums.length ; i++){
    if(sum < 0) sum = 0;
    sum +=nums[i];
    max = Math.max(max,sum);
  }
  return max;
}


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
