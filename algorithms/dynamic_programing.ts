/**
 * LeetCode Problem (Easy):
 * 118. Pascal's Triangle
 * Time Complexity: O(numRows^2)
 * Space Complexity: : O(numRows^2)
 *
 * @format
 */

function generate(numRows: number): number[][] {
	let ans: number[][] = [];
	if (!numRows) return ans;
	let prevRow = [1];
	ans.push(prevRow);
	for (let i = 0; i < numRows - 1; i++) {
		let row = [1];
		for (let j = 0; j < prevRow.length - 1; j++) {
			row[j + 1] = prevRow[j] + prevRow[j + 1];
		}
		row.push(1);
		ans.push(row);
		prevRow = row;
	}
	return ans;
}

/**
 * LeetCode Problem (Easy):
 * 509. Fibonacci Number
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function fib(n: number): number {
	if (!n) return n;
	let num1: number = 0,
		num2: number = 1,
		sum: number = num1 + num2;
	while (n > 1) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
		n--;
	}
	return sum;
}

/**
 * LeetCode Problem (Easy):
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
 * LeetCode Problem (Easy):
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

/**
 * LeetCode Problem (Medium):
 * 45. Jump Game II
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function jump(nums: number[]): number {
	let jump: number = 0,
		cur: number = 0,
		max: number = 0;
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
 * LeetCode Problem (Medium):
 * 53. Maximum Subarray
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function maxSubArray(nums: number[]): number {
	let max = nums[0],
		sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (sum < 0) sum = 0;
		sum += nums[i];
		max = Math.max(max, sum);
	}
	return max;
}
