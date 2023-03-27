/**
 * LeetCode Problem:
 * 509. Fibonacci Number
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function fib(n: number): number {
  if (!n) return n;
  let num1: number = 0, num2: number = 1, sum: number = num1 + num2;
  while (n > 1) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    n--;
  }
  return sum;
}

/**
 * LeetCode Problem:
 * 1137. N-th Tribonacci Number
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function tribonacci(n: number): number {
  if (!n) return n;
  if (n <= 2) return 1;
  let num1: number = 0,
    num2: number = 1,
    num3: number = 1,
    sum: number = num1 + num2 + num3;
  while (n > 2) {
    sum = num1 + num2 + num3;
    num1 = num2;
    num2 = num3;
    num3 = sum;
    n--;
  }
  return sum;
}

/**
 * LeetCode Problem:
 * 45. Jump Game II
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function jump(nums: number[]): number {
  let jump: number = 0, cur: number = 0, max: number = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i == cur) {
      jump++;
      cur = max;
    }
  }
  return jump;
}

/**
 * LeetCode Problem:
 * 53. Maximum Subarray
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function maxSubArray(nums: number[]): number {
  let max = nums[0], sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) sum = 0;
    sum += nums[i];
    max = Math.max(max, sum);
  }
  return max;
}

/**
 * LeetCode Problem:
 * 121. Best Time to Buy and Sell Stock
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))
