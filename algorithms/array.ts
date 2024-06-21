/**
 * LeetCode Problem (Easy):
 * 645. Set Mismatch
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function findErrorNums(nums: number[]): number[] {
  const cache = new Set<number>();
  let duplicate = -1;

  for (const num of nums) {
    if (cache.has(num)) {
      duplicate = num;
    } else {
      cache.add(num);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!cache.has(i)) {
      return [duplicate, i];
    }
  }

  return [];
}

/**
 * LeetCode Problem (Easy):
 * 1752. Check if Array Is Sorted and Rotated
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function check(nums: number[]): boolean {
  let count = 0,
    len = nums.length;

  for (let i = 1; i < len; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;
    }

    if (count > 1) {
      return false;
    }
  }

  return !(nums[0] < nums[len - 1] && count);
}

/**
 * LeetCode Problem (Easy):
 * 496. Next Greater Element I
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const ans: number[] = [],
    stk: number[] = [];
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums2.length; i++) {
    const cur: number = nums2[i];
    while (stk.length && cur > stk[stk.length - 1]!) {
      map.set(stk.pop()!, cur);
    }
    stk.push(cur);
    map.set(cur, -1);
  }
  for (const num of nums1) {
    ans.push(map.get(num)!);
  }
  return ans;
}

/**
 * LeetCode Problem (Easy):
 * 1232. Check If It Is a Straight Line * Time Complexity: O(n)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function checkStraightLine(coordinates: number[][]): boolean {
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  const diffX = x2 - x1;
  const diffY = y2 - y1;
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if (diffX * (y - y2) !== diffY * (x - x2)) {
      return false;
    }
  }
  return true;
}

/**
 * LeetCode Problem (Easy):
 * 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let validPointsIndex = -1,
    sum = x + y,
    minDif = Infinity;
  for (let i = 0; i < points.length; i++) {
    let curX = points[i][0],
      curY = points[i][1],
      curSum = curX + curY;
    let diff = Math.abs(curSum - sum);
    if ((curX === x || curY === y) && diff < minDif) {
      validPointsIndex = i;
      minDif = diff;
    }
  }
  return validPointsIndex;
}

/**
 * LeetCode Problem (Easy):
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

/**
 * LeetCode Problem (Easy):
 * 1502. Can Make Arithmetic Progression From Sequence
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  let diff = Math.abs(arr[0] - arr[1]);
  for (let i = 1; i < arr.length - 1; i++) {
    let curDiff = Math.abs(arr[i] - arr[i + 1]);

    if (curDiff !== diff) return false;
  }
  return true;
}

/**
 * LeetCode Problem (Easy):
 * 1. Two Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const diff = target - cur;
    if (map.has(diff)) return [map.get(diff)!, i];
    else map.set(cur, i);
  }
  return [];
}

/**
 * LeetCode Problem (Easy):
 * 88. Merge Sorted Array
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (!nums2.length) return;
  for (let i = nums2.length - 1; i >= 0; i--) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
}

/**
 * LeetCode Problem (Easy):
 * 350. Intersection of Two Arrays II
 * Time Complexity: O(m+n)
 * Space Complexity: O(m+n)
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  let map = new Map<number, number>();
  let ans: number[] = [];
  nums1.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else map.set(num, 1);
  });
  nums2.forEach((num) => {
    if (map.get(num)) {
      map.set(num, map.get(num)! - 1);
      ans.push(num);
    }
  });
  return ans;
}

/**
 * LeetCode Problem (Medium):
 * 15. 3Sum
 * Time Complexity:
 * Space Complexity:
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1,
        right = nums.length - 1,
        sum = 0 - nums[i];

      while (left < right) {
        if (nums[left] + nums[right] === sum) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (nums[left] + nums[right] < sum) left++;
        else right--;
      }
    }
  }
  return result;
}
