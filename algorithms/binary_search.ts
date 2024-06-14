/**
 * LeetCode Problem (Easy):
 * 704. Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: : O(1)
 *
 * @format
 */

function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middleIndex = Math.floor(left + (right - left) / 2);
    const middleValue = nums[middleIndex];
    if (middleValue < target) left = middleIndex + 1;
    else if (middleValue > target) right = middleIndex - 1;
    else return middleIndex;
  }
  return -1;
}

/**
 * LeetCode Problem (Medium):
 * 34. Find First and Last Position of Element in Sorted Array
 * Time Complexity: O(log n)
 * Space Complexity: : O(1)
 */
function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1,
    position: number[] = [-1, -1];
  while (left <= right) {
    const middleIndex = Math.floor(left + (right - left) / 2);
    const middleValue = nums[middleIndex];
    if (middleValue < target) left = middleIndex + 1;
    else if (middleValue > target) right = middleIndex - 1;
    if (middleValue === target) {
      let left = middleIndex,
        right = middleIndex;
      while (
        (nums[left] === target && left > -1) ||
        (nums[right] === target && right < nums.length)
      ) {
        if (nums[left] === target) left--;
        if (nums[right] === target) right++;
        position = [left + 1, right - 1];
      }
      break;
    }
  }
  return position;
}

/**
 * LeetCode Problem (Medium):
 * 436. Find Right Interval
 * Time Complexity: O(n log n)
 * Space Complexity: : O(n)
 */
function findRightInterval(intervals: number[][]): number[] {
  const n = intervals.length;
  const sorted: [number[], number][] = [];
  for (let i = 0; i < n; i++) sorted.push([intervals[i], i]);
  sorted.sort((a, b) => a[0][0] - b[0][0]);

  function binarySearch(target: number): number {
    const lastIndex = n - 1;
    if (sorted[lastIndex][0][0] < target) return -1;
    let left = 0;
    let right = lastIndex;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (sorted[mid][0][0] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return sorted[left][1];
  }

  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result[i] = binarySearch(intervals[i][1]);
  }
  return result;
}

/**
 * LeetCode Problem (Medium):
 * 611. Valid Triangle Number
 * Time Complexity: O(n^2)
 * Space Complexity: : O(1)
 */
function triangleNumber(nums: number[]): number {
  let count = 0;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < n - 1 && nums[i] != 0; j++) {
      while (k < n && nums[i] + nums[j] > nums[k]) {
        ++k;
      }
      count += k - j - 1;
    }
  }
  return count;
}

/**
 * LeetCode Problem (Medium):
 * 1283. Find the Smallest Divisor Given a Threshold
 * Time Complexity: O(n log m)
 * Space Complexity: : O(1)
 */
function smallestDivisor(nums: number[], threshold: number): number {
  let answer = -1;
  let left = 1;
  let right = Math.max(...nums);
  while (left <= right) {
    const middleValue = Math.floor(left + (right - left) / 2);
    const result = findDivisionSum(nums, middleValue);
    if (result <= threshold) {
      answer = middleValue;
      right = middleValue - 1;
    } else left = middleValue + 1;
  }
  return answer;

  function findDivisionSum(nums: number[], divisor: number): number {
    let sum = 0;
    for (const num of nums) {
      sum += Math.ceil(num / divisor);
    }
    return sum;
  }
}

/**
 * LeetCode Problem (Medium):
 * 74. Search a 2D Matrix
 * Time Complexity: O(m log n)
 * Space Complexity: O(n)
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1;
  while (i > -1) {
    if (matrix[i][0] <= target) {
      return search(matrix[i], target);
    }
    i--;
  }
  return false;

  function search(nums: number[], target: number): boolean {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const middleIndex = Math.floor(left + (right - left) / 2);
      const middleValue = nums[middleIndex];
      if (middleValue < target) left = middleIndex + 1;
      else if (middleValue > target) right = middleIndex - 1;
      else return true;
    }
    return false;
  }
}
